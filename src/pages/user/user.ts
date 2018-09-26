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
  Usuario : any;
  public IdUser;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: UserServiceProvider, private storage: Storage, public appCtrl: App, private nativeStorage: NativeStorage, public events: Events) {
  // this.Correo = email.get('mail');
    //this.Password = passw.get('pass');
  }

  ionViewDidLoad() {
    this.nativeStorage.getItem('mail').then((data) => {
      this.nativeStorage.getItem('pass').then((data2) => {
        this.Correo = data.property;
        this.Password = data2.property;
        console.log('La contraseña es --> ', this.Password);
        console.log('El correo es --> ', this.Correo);
        this.login();
        this.nativeStorage.setItem('usID', { property: "2"}).then(
          data => console.log(data.property),
          error => console.error(error)
        );
      });
    });
  }


  login() {   
    this.restService.getLoggin(this.Correo, Md5.hashStr(this.Password)).then(data => {
      this.Usuario = data;
      console.log(JSON.stringify(data));
    });
  }

  close(){
    this.nativeStorage.clear();
    this.events.publish('user:loggedout');
    this.appCtrl.getRootNav().setRoot(HomePage);
  }


}
