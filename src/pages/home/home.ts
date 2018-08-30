import { ArticlePage } from './../article/article';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from './../../providers/user-service/user-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedItem: any;
  articulos: any[] = [];

  constructor(public navCtrl: NavController, public restService: UserServiceProvider, navParams: NavParams) {
    this.selectedItem = navParams.get('art');
  }

  ionViewDidLoad() {
    this.restService.getArticulos()
      .subscribe(
        (data) => { // Success
          this.articulos = data['records'];

        },
        (error) => {
          console.error(error);
        }
      )
  }

  itemTapped(event, artId) {
    this.navCtrl.push(ArticlePage, {
      art: artId.idArticulo
    });
    alert(JSON.stringify(artId.idArticulo));
    console.log("Articulo Seleccionado");
    console.log(artId);
  }
}
