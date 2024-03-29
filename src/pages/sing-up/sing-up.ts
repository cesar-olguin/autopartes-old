import { Md5 } from 'ts-md5/dist/md5';
import { HomePage } from './../home/home';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ViewController, App } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginPage } from '../login/login';

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
    Nombre: string;
    ApellidoP: string;
    ApellidoM: string;
    Correo: string;
    Cell: string;
    Contrasena: string;
    Confirmar: string;
    Fecha_nac: string;
    Genero: string;
    Usuario;
    //pushPage: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public restService: UserServiceProvider, public alertCtrl: AlertController, public viewCtrl: ViewController,
        public appCtrl: App) {
    }

    ionViewDidLoad() {

    }

    pushPage() {
        this.navCtrl.pop();
        this.navCtrl.push(HomePage);
    }

    addUser() {
        if (this.Contrasena != this.Confirmar) {
            this.noCoinciden();
        }
        else if (this.Nombre == null || this.ApellidoP == null || this.ApellidoM == null || this.Correo == null || this.Cell == null || this.Fecha_nac == null) {
            this.camposVacios();
        }
        else {
            if (this.Genero != 'H') {
                this.Genero = 'M';
            }
            let body = {
                Nombre: this.Nombre,
                ApellidoP: this.ApellidoP,
                ApellidoM: this.ApellidoM,
                Correo: this.Correo,
                Cell: this.Cell,
                Contrasena: Md5.hashStr(this.Contrasena),
                Confirmar: Md5.hashStr(this.Confirmar),
                Fecha_nac: this.Fecha_nac = new Date().toLocaleDateString('en-GB'),
                Genero: this.Genero,
                Fecha_alta: this.date = new Date().toLocaleDateString('en-GB')
            }
            this.restService.checkEmail(this.Correo).then(data => {
                this.Usuario = JSON.stringify(data);
                if (this.Usuario == "[]") {
                    console.log(JSON.stringify(body));
                    this.restService.postRegistro(body)
                        .then((result) => {
                            console.log(result);
                        }, (err) => {
                            console.log(err);
                        });
                    this.userAdded();
                    this.navCtrl.push(LoginPage);
                }
                else {
                    this.userCheck();
                }
            });
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
            buttons: ['Aceptar'],
        });
        alert.present();
    }

    userCheck() {
        let alert = this.alertCtrl.create({
            title: 'ERROR',
            subTitle: 'El usuario ya existe.',
            buttons: ['Aceptar'],
        });
        alert.present();
    }

}
