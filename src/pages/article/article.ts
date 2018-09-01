import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { UserServiceProvider } from './../../providers/user-service/user-service';

@Component({
  selector: 'page-article',
  templateUrl: 'article.html'
})
export class ArticlePage {

articuloId: any;
idSelected: any[]=[];
comentarios: any;
  
constructor(public navCtrl: NavController, public restService: UserServiceProvider, navArt: NavParams) {
  this.idSelected = navArt.get('art');
  this.restService.getArticuloById(navArt.get('art')).then(data => {
    this.articuloId = data;
  });
  this.restService.getComentarios(navArt.get('art')).then(data =>{
    this.comentarios = data;
  });
}

  ionViewDidLoad(){ 
   /* this.restService.getArticuloById()
      .then(data => {
        this.articuloId = data;
        console.log("Datos Artiulo");
        console.log(this.articuloId);
      });*/
  }
}
