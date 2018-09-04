import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CameraPage } from './../camera/camera';

/**
 * Generated class for the AddArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-article',
  templateUrl: 'add-article.html',
})
export class AddArticlePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddArticlePage');
  }

  openCamera() {
    this.navCtrl.push(CameraPage, {
    
    });
  }

}
