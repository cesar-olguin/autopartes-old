import { NativeStorage } from '@ionic-native/native-storage';
import { Component } from '@angular/core';
import { NavController, NavParams, App, Events } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Md5 } from 'ts-md5';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {


  public Correo;
  public Password;
  Usuario: any;
  public user;
  objectKeys = Object.keys;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: UserServiceProvider, private storage: Storage, public appCtrl: App, private nativeStorage: NativeStorage, public events: Events) {
    // this.Correo = email.get('mail');
    //this.Password = passw.get('pass');
    this.storage.get('user').then((uval) => {
      this.storage.get('pass').then((pval) => {
        this.Correo = uval;
        this.Password = pval;

        this.restService.getLoggin(this.Correo, Md5.hashStr(this.Password)).then(data => {
          this.Usuario = data;

          console.log(data);

          let obj = JSON.parse(JSON.stringify(data));
          this.user = obj[0];
          //alert("JSON Parse -> " + this.user.idUsuario);
          this.storage.set('idUser', this.user.idUsuario);

        });
      });
    });
  }

  ionViewDidLoad() {








    /*
          this.nativeStorage.getItem('user').then((data) => {
          this.nativeStorage.getItem('pass').then((data2) => {
            this.Correo = data.property;
            this.Password = data2.property;
            console.log('La contraseña es --> ', this.Password);
            console.log('El correo es --> ', this.Correo);
            this.restService.getLoggin(this.Correo, Md5.hashStr(this.Password)).then(data => {
             this.Usuario = data;
    
          console.log(data);
    
          let obj = JSON.parse(JSON.stringify(data));
          this.user = obj[0];
          alert("JSON Parse -> " + this.user.idUsuario);
          this.nativeStorage.setItem('idUser', { property: this.user.idUsuario}).then(
            data => console.log("ID Usuario -> " + data.property),
            error => console.error(error)
          );
            });
          });
        });*/
  }

  close() {
    this.storage.clear();
    window.localStorage.clear();
    this.events.publish('user:loggedout');
    this.appCtrl.getRootNav().setRoot(HomePage);
  }


}
