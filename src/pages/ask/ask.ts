import { NativeStorage } from '@ionic-native/native-storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-ask',
  templateUrl: 'ask.html',
})
export class AskPage {

  image: string = null;
  date: string;
  Titulo: string;
  Descripcion: string;
  Fecha_alta: string;
  Foto_Principal: string;
  foto;
  IdUser;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private restService: UserServiceProvider, public nativeStorage: NativeStorage, public storage: Storage) {
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

  addAsk() {
    this.storage.get('idUser').then((val) => {
      this.IdUser = val; 
      if (this.foto == null) {
        this.foto = '../../assets/imgs/sin-foto.png'
      }
      let body = {
        idUsuario: this.IdUser,
        Titulo: this.Titulo,
        Descripcion: this.Descripcion,
        Fecha_alta: this.date = new Date().toLocaleDateString('en-GB'),
        Foto_Principal: this.foto,
      }
  
      console.log(JSON.stringify(body));
      this.restService.postPedido(body)
        .then((result) => {
          console.log(result);
        }, (err) => {
          console.log(err);
        });
  
      this.navCtrl.pop();
    });
  }

}
