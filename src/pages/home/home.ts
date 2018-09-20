import { AskPage } from './../ask/ask';
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
  pedidos: any[] = [];
  modelos: any;
  marcas: any[] = [];
  selectModelo: any;
  selectMarca: any;
  public marcaId;
  public modeloId;
  public marcaName;
  public modeloName;

  constructor(public navCtrl: NavController, public restService: UserServiceProvider, public navParams: NavParams, public loadingCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
    this.pedidosGet();
  }


  pedidosGet(){
    this.restService.getPedidos()
      .subscribe(
        (data) => { // Success
          this.pedidos = data['records'];
        },
        (error) => {
          console.error(error);
        }
      )
  }

  pushPage() {
    this.navCtrl.push(AskPage);
  }


}
