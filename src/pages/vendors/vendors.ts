import { AddArticlePage } from './../add-article/add-article';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { ArticlePage } from './../article/article';
import { CarcoincidencePage } from '../carcoincidence/carcoincidence';

@Component({
  selector: 'page-vendors',
  templateUrl: 'vendors.html',
})
export class VendorsPage {

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
  constructor(public navCtrl: NavController, public restService: UserServiceProvider, public navParams: NavParams) {
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

  addArticle(/*marcaId,modeloId*/) {
    this.navCtrl.push(AddArticlePage, {
      
    });
  }

}
