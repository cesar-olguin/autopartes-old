import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CarcoincidencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carcoincidence',
  templateUrl: 'carcoincidence.html',
})
export class CarcoincidencePage {


  selectModelo: any;
  selectMarca: any;
  selectMarcaName: any;
  selectModeloName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public navModId: NavParams, public navModName: NavParams ,public navMarId: NavParams, public navMarName: NavParams) {
    this.selectMarca = navMarId.get('marId');
    //console.log("Marca ID =>", navMarId.get('marId'));
    this.selectMarcaName = navMarName.get('marName');
    //console.log("Marca Nombre =>", navMarName.get('marName'));
    this.selectModelo = navModId.get('modId');
    //console.log("Modelo ID =>", navModId.get('modId'));
    this.selectModeloName = navModName.get('modName');
    //console.log("Modelo Nombre =>", navModName.get('modName'));
  }

  ionViewDidLoad() {
  
  }

}
