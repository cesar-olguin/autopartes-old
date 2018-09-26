import { UserPage } from './../user/user';
import { NativeStorage } from '@ionic-native/native-storage';
import { empty } from 'rxjs/Observer';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, App } from 'ionic-angular';
import { Md5 } from 'ts-md5/dist/md5';
import { Storage } from '@ionic/storage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: UserServiceProvider, public alertCtrl: AlertController, private appCtrl: App, private storage: Storage, private nativeStorage: NativeStorage) {
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
        if ((JSON.stringify(data)) == "[]") {
          this.sinDatos();
        }
        else {
          console.log(JSON.parse(JSON.stringify(data)));
          //Sql
          //this.storage.set('mail', this.Correo);
          //this.storage.set('pass', this.Password);

          //Cordova (Nativo)
          this.nativeStorage.setItem('mail', { property: this.Correo }).then(
            data => console.log(data.property),
            error => console.error(error)
          );
          this.nativeStorage.setItem('pass', { property: this.Password }).then(
            data => console.log(data.property),
            error => console.error(error)
          );
          this.appCtrl.getRootNav().setRoot(UserPage);
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


}
