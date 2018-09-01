import { ArticlePage } from './../article/article';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { LoadingController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedItem: any;
  articulos: any[] = [];
  modelos: any;
  marca: any[] = [];
  selectModelo: any[] = [];

  constructor(public navCtrl: NavController, public restService: UserServiceProvider, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.selectedItem = navParams.get('art');
    //this.selectModelo = navParams.get('mar');
    //this.presentLoading();
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Cargando...",
      duration: 2000
    });
    loader.present();
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

    this.restService.getMarcas()
      .subscribe(
        (data) => {
          this.marca = data['records'];
        },
        (error) => {
          console.log(error);
        }
      )
  }

  itemTapped(artId) {
    this.navCtrl.push(ArticlePage, {
      art: artId.idArticulo
    });
    alert(JSON.stringify(artId.idArticulo));
    console.log("Articulo Seleccionado");
    console.log(artId);
  }

  modeloTapped(idMarca) {
    this.restService.getModelo(idMarca).then(data => {
      this.modelos = data;
    });
  }

}
