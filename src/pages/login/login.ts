import { UserPage } from './../user/user';
import { NativeStorage } from '@ionic-native/native-storage';
import { empty } from 'rxjs/Observer';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, App, Events } from 'ionic-angular';
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


  public Usuario;
  public Password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: UserServiceProvider, public alertCtrl: AlertController, private appCtrl: App, private storage: Storage, private nativeStorage: NativeStorage, public events: Events) {
  }

  ionViewDidLoad() {
    //this.Usuario = this.getFromStorageAsyncUser();
    //this.Password = this.getFromStorageAsyncPass();
  }

  login() {
    if (this.Usuario == empty || this.Password == empty) {
      this.sinDatos();
    }
    else {
      this.restService.getLoggin(this.Usuario, Md5.hashStr(this.Password)).then(data => {
        console.log(JSON.stringify(data));
        if ((JSON.stringify(data)) == "[]") {
          this.correoError();
        }
        else {
          this.storage.set('user', this.Usuario);
          this.storage.set('pass', this.Password);

          this.events.publish('user:loggedin');
          this.appCtrl.getRootNav().setRoot(UserPage);
        }
      });
    }
  }

  async getFromStorageAsyncUser() {
    return await this.storage.get('user');
  }

  async getFromStorageAsyncPass() {
    return await this.storage.get('pass');
  }

  sinDatos() {
    let alert = this.alertCtrl.create({
      title: 'ERROR',
      subTitle: 'Llena los campos.',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  correoError() {
    let alert = this.alertCtrl.create({
      title: 'ERROR',
      subTitle: 'Error en el usuario y/o contraseña.',
      buttons: ['Aceptar']
    });
    alert.present();
  }

}
