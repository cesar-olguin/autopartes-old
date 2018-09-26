import { NativeStorage } from '@ionic-native/native-storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ArticlePage } from '../article/article';
import { AddArticlePage } from '../add-article/add-article';

/**
 * Generated class for the MyPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-post',
  templateUrl: 'my-post.html',
})
export class MyPostPage {
  selectedItem: any;
  Articulos: any;
  modelos: any;
  marcas: any[] = [];
  selectModelo: any;
  selectMarca: any;

  Usuario;

  constructor(public navCtrl: NavController, public restService: UserServiceProvider, public navParams: NavParams, private nativeStorage: NativeStorage) {
  }
  ionViewDidLoad() {
    this.nativeStorage.getItem('idUser').then((data) => {
      this.Usuario = data.property;
      console.log('Usuario: ', this.Usuario);
      this.restService.getArticuloByUser(this.Usuario).then(data => {
        this.Articulos = data;
        console.log(JSON.stringify(data));
      });
    });
  }

  itemTapped(artId) {
    this.navCtrl.push(ArticlePage, {
      art: artId.idArticulo
    });
  }


  

  addArticle(/*marcaId,modeloId*/) {
    this.navCtrl.push(AddArticlePage, {
      
    });
  }

}
