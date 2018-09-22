import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: UserServiceProvider, private storage: Storage, public appCtrl: App) {
   // this.Correo = email.get('mail');
    //this.Password = passw.get('pass');
  }

  ionViewDidLoad() {
    //console.log(this.Correo);
    //
    this.storage.get('mail').then((val1) => {
      this.storage.get('pass').then((val2) => {
        this.Password = val2;
        this.Correo = val1;
        console.log('La contraseña es --> ', this.Password);
        console.log('El correo es --> ', this.Correo);
        this.login();
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
    this.storage.clear();
    window.location.reload(this.appCtrl.getRootNav().setRoot(HomePage));
  }


}
