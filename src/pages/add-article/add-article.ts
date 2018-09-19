import { ArticlePage } from './../article/article';
import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
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
  date: string;
  myFoto: FormGroup;
  public foto;
  
  constructor(public navCtrl: NavController, public restService: UserServiceProvider, public navParams: NavParams, private camera: Camera, public formBuilder: FormBuilder, private appCtrl: App) {
    this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
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
        this.foto = this.image;
        this.myForm = this.createMyForm();
      })
      .catch(error => {
        console.error(error);
      });
  }

  public createMyForm() {
    if(this.foto == null){
      this.foto = '../../assets/imgs/sin-foto.png'
    }
    return this.formBuilder.group({
      Titulo: ['', Validators.required],
      Descripcion: ['', Validators.required],
      Precio: ['', Validators.required],
      idUsuario: ['1'],
      Cantidad: ['1'],
      Ubicacion: ['Manzanillo,Colima,Mexico'],
      Fecha_alta:[this.date = new Date().toLocaleDateString('en-GB')],
      Fecha_modificacion:[''],
      Foto_Principal:[this.foto, Validators.required]
    });
  }

  addArticle() {
    console.log(JSON.stringify(this.myForm.value));
    console.log(this.foto);
    this.restService.postArticulo(this.myForm.value).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
    this.appCtrl.getRootNav().setRoot(ArticlePage);
  }

}
