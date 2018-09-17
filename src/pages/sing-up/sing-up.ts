import { HomePage } from './../home/home';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ViewController, App } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { empty } from 'rxjs/Observer';

/**
 * Generated class for the SingUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sing-up',
  templateUrl: 'sing-up.html',
})
export class SingUpPage {

  date: string;
  myForm: FormGroup;
  passsword: string;
  //pushPage: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public restService: UserServiceProvider, public alertCtrl: AlertController,public viewCtrl: ViewController,
    public appCtrl: App) {
    this.myForm = this.createMyForm();
    //this.pushPage = HomePage;
    
  }

  ionViewDidLoad() {
  
  }

  pushPage() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push(HomePage);
  }

  public createMyForm() {
    return this.formBuilder.group({
      Nombre: [''],
      ApellidoP: [''],
      ApellidoM: [''],
      Correo: [''],
      Contrasena: [''],
      Confirmar: [''],
      Fecha_alta: [this.date = new Date().toLocaleDateString('en-GB')],
      Cell: [''],
      Fecha_nac: [''],
      Genero: ['H']
    });
  }

addUser(){
  /*if(this.myForm.value.Contrasena != this.myForm.value.Confirmar){
    this.noCoinciden();
  }*/
  if(this.myForm.value.Contrasena == '' || this.myForm.value.Nombre == '' || this.myForm.value.ApellidoP == '' || this.myForm.value.Correo == '' || this.myForm.value.Contrasena == '' || this.myForm.value.Cell == '' || this.myForm.value.Fecha_nac == '' ){
    this.camposVacios();
  }
  else{
    console.log(JSON.stringify(this.myForm.value));
    /*this.restService.postRegistro(this.myForm.value)
    .then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });*/
    this.userAdded();
  }
  
}

noCoinciden() {
  let alert = this.alertCtrl.create({
    title: 'ERROR',
    subTitle: 'Las contraseñas no coinciden',
    buttons: ['Cerrar']
  });
  alert.present();
}

camposVacios() {
  let alert = this.alertCtrl.create({
    title: 'ERROR',
    subTitle: 'Algunos campos están vacíos.',
    buttons: ['Cerrar']
  });
  alert.present();
}

userAdded() {
  let alert = this.alertCtrl.create({
    title: 'BIEN',
    subTitle: 'Tu usuario fue registrado.',
    buttons: ['Aceptar']
  });
  alert.present();
}

}
