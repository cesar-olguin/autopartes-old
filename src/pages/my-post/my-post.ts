import { NativeStorage } from "@ionic-native/native-storage";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UserServiceProvider } from "../../providers/user-service/user-service";
import { ArticlePage } from "../article/article";
import { AddArticlePage } from "../add-article/add-article";
import { Storage } from "@ionic/storage";

/**
 * Generated class for the MyPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-my-post",
  templateUrl: "my-post.html"
})
export class MyPostPage {
  selectedItem: any;
  articulos: any;
  Usuario;

  constructor(
    public navCtrl: NavController,
    public restService: UserServiceProvider,
    public navParams: NavParams,
    private nativeStorage: NativeStorage,
    public storage: Storage
  ) {
    window.location.reload;
    this.load();
   }

  ionViewDidLoad() {
    window.location.reload;
    this.load();
  }


  ionViewCanEnter() {
    window.location.reload;
    this.load();
  }

  ionViewWillEnter() {
    window.location.reload;
    this.load();
  }

  load(){
    this.storage.get("idUser").then(val => {
      this.Usuario = val;
      this.restService.getArticuloByUser(this.Usuario).then(data => {
        this.articulos = data;
      });
    });
  }

  itemTapped(artId) {
    this.navCtrl.push(ArticlePage, {
      art: artId.idArticulo
    });
  }

  addArticle(/*marcaId,modeloId*/) {
    this.navCtrl.push(AddArticlePage, {});
  }
}
