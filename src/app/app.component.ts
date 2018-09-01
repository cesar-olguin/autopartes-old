import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CarPage } from '../pages/car/car';
import { FavoritesPage } from '../pages/favorites/favorites';
import { ListPage } from '../pages/list/list';
import { LoginPage } from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  pages2: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component:LoginPage },
      { title: 'Inicio', component: HomePage },
      { title: 'Carrito', component: CarPage },
      { title: 'Favoritos', component: FavoritesPage },
      { title: 'List', component: ListPage }
    ];

    this.pages2 = {
      loginPage: LoginPage,
      homePage: HomePage,
      carPage: CarPage,
      favoritesPage: FavoritesPage,
      listPage: ListPage,
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

  openPage(page2) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page2.component);
  }
}
