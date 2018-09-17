import { Camera } from '@ionic-native/camera';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CarPage } from '../pages/car/car';
import { FavoritesPage } from '../pages/favorites/favorites';
import { ArticlePage } from '../pages/article/article';
import { ListPage } from '../pages/list/list';
import { CarcoincidencePage } from '../pages/carcoincidence/carcoincidence';
import { LoginPage } from '../pages/login/login';
import { AddArticlePage } from './../pages/add-article/add-article';
import { VendorsPage } from './../pages/vendors/vendors';
import { UserPage } from './../pages/user/user';
import { CameraPage } from './../pages/camera/camera';
import { SingUpPage } from '../pages/sing-up/sing-up';
import { AccountPage } from './../pages/account/account';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CarPage,
    FavoritesPage,
    ArticlePage,
    ListPage,
    CarcoincidencePage,
    LoginPage,
    AddArticlePage,
    VendorsPage,
    UserPage,
    CameraPage,
    SingUpPage,
    AccountPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CarPage,
    FavoritesPage,
    ArticlePage,
    ListPage,
    CarcoincidencePage,
    LoginPage,
    AddArticlePage,
    VendorsPage,
    UserPage,
    CameraPage,
    SingUpPage,
    AccountPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    Camera
  ]
})
export class AppModule {}
