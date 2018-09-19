import { HomePage } from './../home/home';
import { empty } from 'rxjs/Observer';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, App } from 'ionic-angular';
import { Md5 } from 'ts-md5/dist/md5';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  public Correo;
  public Password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: UserServiceProvider, public alertCtrl: AlertController, private appCtrl: App) {
  }

  ionViewDidLoad() {

  }

  login() {
    if (this.Correo == empty || this.Password == empty) {
      this.sinDatos();
    }
    else {
      this.restService.getLoggin(this.Correo, Md5.hashStr(this.Password)).then(data => {
        console.log(JSON.stringify(data));
        if((JSON.stringify(data)) == "[]"){
          this.sinDatos();
        }
        else{
          this.trueLoggin();
          this.appCtrl.getRootNav().setRoot(HomePage);
        }
      });
    }
  }

  sinDatos() {
    let alert = this.alertCtrl.create({
      title: 'ERROR',
      subTitle: 'Correo o Contraseña equivocados.',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  trueLoggin() {
    let alert = this.alertCtrl.create({
      title: 'Bien',
      subTitle: 'Sesión Exitosa',
      buttons: ['Aceptar']
    });
    alert.present();
  }

}
