import { ArticlePage } from './../article/article';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { LoadingController } from 'ionic-angular';
import { CarcoincidencePage } from '../carcoincidence/carcoincidence';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedItem: any;
  articulos: any[] = [];
  modelos: any;
  marcas: any[] = [];
  selectModelo: any;
  selectMarca: any;
  public marcaId;
  public modeloId;
  public marcaName;
  public modeloName;

  constructor(public navCtrl: NavController, public restService: UserServiceProvider, public navParams: NavParams, public loadingCtrl: LoadingController) {
    //this.selectedItem = navParams.get('art');
    //this.selectModelo = navParams.get('mod');
    //this.selectMarca = navParams.get('mar');
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
          this.marcas = data['records'];
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
  }

  marcaTapped(idMarca,Marca) {
    this.marcaId = idMarca;
    this.marcaName = Marca;
    this.restService.getModelo(idMarca).then(data => {
      this.modelos = data
    });
  }

  modeloTapped(idMarca,Modelo) {
   this.modeloId = idMarca;
   this.modeloName = Modelo;
  }

  buscarModeloMarca(/*marcaId,modeloId*/) {
    this.navCtrl.push(CarcoincidencePage, {
      marId: this.marcaId,
      marName: this.marcaName,
      modId: this.modeloId,
      modName: this.modeloName
    });
  }

}
