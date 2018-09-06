import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import { Http, Headers, RequestOptions } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceProvider } from './../../providers/user-service/user-service';

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

  image: string = null;
  myForm: FormGroup;
  
  constructor(public navCtrl: NavController, public restService: UserServiceProvider, public navParams: NavParams, private camera: Camera, public formBuilder: FormBuilder) {
    this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddArticlePage');
  }

  getPicture() {
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture(options)
      .then(imageData => {
        this.image = `data:image/jpeg;base64,${imageData}`;
      })
      .catch(error => {
        console.error(error);
      });
  }

  private createMyForm() {
    return this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  addArticle() {
    console.log(this.myForm.value);
    alert("Datos-> "+JSON.stringify(this.myForm.value));
    alert(this.restService.postArticulo(JSON.stringify(this.myForm.value)).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    }));
  }

}
