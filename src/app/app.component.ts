import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CarPage } from '../pages/car/car';
import { FavoritesPage } from '../pages/favorites/favorites';
import { ListPage } from '../pages/list/list';
import { LoginPage } from "../pages/login/login";
import { AddArticlePage } from '../pages/add-article/add-article';
import { VendorsPage } from './../pages/vendors/vendors';
import { SingUpPage } from './../pages/sing-up/sing-up';
import { UserPage } from './../pages/user/user';
import { AccountPage } from './../pages/account/account';
import { ArticlePage } from './../pages/article/article';
import { MyPostPage } from '../pages/my-post/my-post';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any, icon: string }>;
  menuLogin: any;
  localStorage;
  public Correo;
  public Password;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage, private nativeStorage: NativeStorage, events: Events) {
    this.initializeApp();

    this.pages = [
      { title: 'Cuenta', component: AccountPage, icon: 'paper' },
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Carrito', component: CarPage, icon: 'cart' },
      { title: 'Favoritos', component: FavoritesPage, icon: 'star' },
      { title: 'Articulos en Venta', component: VendorsPage, icon: 'cart' },
    ];

    events.subscribe('user:loggedin',() => {
      this.pages = [
        //{ title: 'Cuenta', component: AccountPage, icon: 'paper' },
        { title: 'Home', component: HomePage, icon: 'home' },
        { title: 'Carrito', component: CarPage, icon: 'cart' },
        { title: 'Favoritos', component: FavoritesPage, icon: 'star' },
        { title: 'Articulos en Venta', component: VendorsPage, icon: 'cart' },
        { title: 'Usuario', component: UserPage, icon: 'person' },
        { title: 'Mis Ventas', component: MyPostPage, icon: 'cart' }
      ];
    });

    events.subscribe('user:loggedout',() => {
      this.pages = [
        //{ title: 'Cuenta', component: AccountPage, icon: 'paper' },
        { title: 'Home', component: HomePage, icon: 'home' },
        { title: 'Carrito', component: CarPage, icon: 'cart' },
        { title: 'Favoritos', component: FavoritesPage, icon: 'star' },
        { title: 'Articulos en Venta', component: VendorsPage, icon: 'cart' },
        { title: 'Usuario', component: UserPage, icon: 'person' },
        { title: 'Mis Ventas', component: MyPostPage, icon: 'cart' }
      ];
    });

    /*this.nativeStorage.getItem('mail').then((data) => {
      this.nativeStorage.getItem('pass').then((data2) => {
        this.Correo = data.property;
        this.Password = data2.property;
        console.log('La contraseña es --> ', this.Password);
        console.log('El correo es --> ', this.Correo);
        if (this.Correo > "" && this.Password > "") {
          this.pages = [
            //{ title: 'Cuenta', component: AccountPage, icon: 'paper' },
            { title: 'Home', component: HomePage, icon: 'home' },
            { title: 'Carrito', component: CarPage, icon: 'cart' },
            { title: 'Favoritos', component: FavoritesPage, icon: 'star' },
            { title: 'Articulos en Venta', component: VendorsPage, icon: 'cart' },
            { title: 'Usuario', component: UserPage, icon: 'person' },
            { title: 'Mis Ventas', component: MyPostPage, icon: 'cart' }
          ];
        }
      });
    });*/

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
