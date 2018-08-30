import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from './../../providers/user-service/user-service';

@Component({
  selector: 'page-article',
  templateUrl: 'article.html'
})
export class ArticlePage {
articuloId: any;
  constructor(public navCtrl: NavController, public restService: UserServiceProvider) {

  }
  ionViewDidLoad(){
    this.restService.getArticuloId()
      .then(data => {
        this.articuloId = data;
        console.log("Datos Artiulo");
        console.log(this.articuloId);
      });
  }
}
