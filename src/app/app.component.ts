import { AskPage } from './../pages/ask/ask';
import { ArticlePage } from './../pages/article/article';
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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;
  menuLogin: any;
  
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Usuario', component: AccountPage, icon: 'person' },
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Carrito', component: CarPage, icon: 'home' },
      { title: 'Favoritos', component: FavoritesPage, icon: 'home' },
      { title: 'Articulos en Venta', component: VendorsPage, icon: 'home' },
      { title: 'Pregunta por un Articulo', component: AskPage, icon: 'home' }
    ];

  
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
