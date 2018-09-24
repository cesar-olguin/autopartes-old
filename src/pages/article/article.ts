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

  constructor(public navCtrl: NavController, public restService: UserServiceProvider, public navArt: NavParams) {
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
    let body = {
      idArticulo: (this.idSelected),
      idUsuario: "1",
      Comentario: this.Comentario,
    }
    console.log(JSON.stringify(body));
    this.restService.postComentario(body).then(
      result => {
        console.log(result);
        this.loadChat();
      },
      err => {
        console.log(err);
      }
    );
  }

  loadArt(){
    this.restService.getArticuloById(this.idArticulo).then(data => {
      this.articuloId = data;
      console.log(data);
    });
  }

  loadChat(){
    this.restService.getComentarios(this.idArticulo).then(data => {
      this.comentarios = data;
    });
  }

}
