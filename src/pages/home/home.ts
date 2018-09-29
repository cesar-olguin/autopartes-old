import { AskPage } from "./../ask/ask";
import { Component } from "@angular/core";
import { NavController, NavParams, Events } from "ionic-angular";
import { UserServiceProvider } from "./../../providers/user-service/user-service";
import { LoadingController } from "ionic-angular";
import { Observable } from 'rxjs';
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  selectedItem: any;
  pedidos;
  items;
  displayedImages;

  constructor(
    public navCtrl: NavController,
    public restService: UserServiceProvider,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public events: Events
  ) { }

  ionViewDidLoad() {

    if (window.localStorage.getItem("user") != null && window.localStorage.getItem("pass") != null) {
      //Hay una sesión iniciada
      //Dirige a la pantalla principal ya logueada.
      this.events.publish('user:loggedin');
    } else {
      //Manda la pantalla de inicio de sesión o autentificación
      this.events.publish('user:loggedout');
    }
    this.load();
  }

  ionViewCanEnter() {
    console.log("ionViewCanEnter");
    window.location.reload;
    this.load();
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter");
    window.location.reload;
    this.load();
  }

  pushPage() {
    this.navCtrl.push(AskPage);
  }

  load() {
    this.restService.getPedidos().subscribe(
      data => {
        // Success
        this.pedidos = data;
        //this.items = data;
        // console.log(data);
        this.items = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  ngOnInit() {
    const baseImg = "http://lorempixel.com/400/200/";
    const imgArray = Array(50).fill(baseImg);

    this.displayedImages = Observable.of(imgArray);
  }

}