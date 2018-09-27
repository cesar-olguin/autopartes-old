import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage';
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { UserServiceProvider } from "./../../providers/user-service/user-service";

@Component({
  selector: "page-article",
  templateUrl: "article.html"
})
export class ArticlePage {
  articuloId: any;
  idSelected: any[] = [];
  comentarios: any;
  idArticulo;
  idUsuario;
  Comentario;
  IdUser;

  constructor(public navCtrl: NavController, public restService: UserServiceProvider, public navArt: NavParams, private nativeStorage: NativeStorage, public storage: Storage) {
    this.idSelected = navArt.get("art");
    this.idArticulo = this.idSelected;
    this.loadArt();
    this.loadChat();
  }

  ionViewDidLoad() {
    /* this.restService.getArticuloById()
      .then(data => {
        this.articuloId = data;
        console.log("Datos Artiulo");
        console.log(this.articuloId);
      });*/
  }

  postChat() {
    this.storage.get('idUser').then((data) => {
      this.IdUser = data;
      if (this.IdUser == null){
        this.IdUser = "0";
        console.log('Usuario: ', this.IdUser);
      }
      
        let body = {
          idArticulo: this.idSelected,
          idUsuario: this.IdUser,
          Comentario: this.Comentario,
        }
        console.log('Usuario: ', this.IdUser);
        console.log(JSON.stringify(body));
        this.restService.postComentario(body).then((result) => {
          console.log(result);
          this.restService.getArticuloById(this.idArticulo).then(data => {
            this.articuloId = data;
          });
        }, (err) => {
          console.log(err);
        });
      
      

      
    });
  }

  loadArt(){
    this.restService.getArticuloById(this.idArticulo).then(data => {
      this.articuloId = data;
    });
  }

  loadChat(){
    this.restService.getComentarios(this.idArticulo).then(data => {
      this.comentarios = data;
    });
  }

}
