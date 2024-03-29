import { SingUpPage } from './../sing-up/sing-up';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  loggin() {
    this.navCtrl.push(LoginPage, {
      
    });
  }

  newAccount(){
    this.navCtrl.push(SingUpPage,{

    });
  }
  
}
