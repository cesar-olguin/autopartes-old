import { NativeStorage } from '@ionic-native/native-storage';
import { ArticlePage } from './../article/article';
import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import { Http, Headers, RequestOptions } from '@angular/common/http';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Storage } from '@ionic/storage';

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
  date: string;
  Titulo: string;
  Descripcion: string;
  Precio: string;
  Fecha_alta: string;
  Foto_Principal: string;
  foto;
  Usuario;

  constructor(public navCtrl: NavController, public restService: UserServiceProvider, public navParams: NavParams, private camera: Camera, private appCtrl: App, private nativeStorage: NativeStorage, private storage: Storage) {
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
      })
      .catch(error => {
        console.error(error);
      });
  }

  addArticle() {
    this.storage.get('idUser').then((val) => {
      this.Usuario = val;
      if (this.foto == null) {
        this.foto = '../../assets/imgs/sin-foto.png'
      }
  
      let body = {
        Titulo: this.Titulo,
        Descripcion: this.Descripcion,
        Precio: this.Precio,
        idUsuario: this.Usuario,
        Cantidad: "1",
        Ubicacion: "Manzanillo,Colima,Mexico",
        Fecha_alta: this.date = new Date().toLocaleDateString('en-GB'),
        Fecha_modificacion: this.date = new Date().toLocaleDateString('en-GB'),
        Foto_Principal: this.foto,
      }
  
      console.log(JSON.stringify(body));
      console.log(this.foto);
      this.restService.postArticulo(body).then((result) => {
        console.log(result);
      }, (err) => {
        console.log(err);
      });
  
      this.navCtrl.pop();
    });

    
  }

}
