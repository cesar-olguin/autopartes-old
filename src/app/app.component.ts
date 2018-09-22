import { Storage } from '@ionic/storage';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
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

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage) {
    this.initializeApp();

    this.storage.get('mail').then((val1) => {
      this.storage.get('pass').then((val2) => {
        this.Password = val2;
        this.Correo = val1;
        if (val1 != null && val2 != null) {
          this.pages = [
            //{ title: 'Cuenta', component: AccountPage, icon: 'paper' },
            { title: 'Home', component: HomePage, icon: 'home' },
            { title: 'Carrito', component: CarPage, icon: 'cart' },
            { title: 'Favoritos', component: FavoritesPage, icon: 'star' },
            { title: 'Articulos en Venta', component: VendorsPage, icon: 'cart' },
            { title: 'Usuario', component: UserPage, icon: 'person' },
          ];
        }
        else if (val1 == null && val2 == null) {
          this.pages = [
            { title: 'Cuenta', component: AccountPage, icon: 'paper' },
            { title: 'Home', component: HomePage, icon: 'home' },
            { title: 'Carrito', component: CarPage, icon: 'cart' },
            { title: 'Favoritos', component: FavoritesPage, icon: 'star' },
            { title: 'Articulos en Venta', component: VendorsPage, icon: 'cart' },
            //{ title: 'Usuario', component: UserPage, icon: 'person' },
          ];
        }
      });
    });


    this.menuLogin = {
      loginPage: LoginPage,
      homePage: HomePage,
      carPage: CarPage,
      favoritesPage: FavoritesPage,
      listPage: ListPage,
      addArticle: AddArticlePage,
      userPage: UserPage,
      vendorsPage: VendorsPage,
      singUpPage: SingUpPage,
      accountPage: AccountPage,
      articlePage: ArticlePage
    }
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
