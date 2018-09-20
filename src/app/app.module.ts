import { AskPage } from './../pages/ask/ask';
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
import { AuthProvider } from '../providers/auth/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { IonicStorageModule } from '@ionic/storage';

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
    AccountPage,
    AskPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthShortNames: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
      dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
      dayShortNames: ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'],
    }),
    IonicStorageModule.forRoot()
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
    AccountPage,
    AskPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    Camera,
    AuthProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}
