import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  baseUrl="http://solucionesgp.com/autopartes";

  constructor(private http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  
  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=25');
  }
  getArticulos(){
    return this.http.get(this.baseUrl+'/articulo/');
  }

  getMarcas(){
    return this.http.get(this.baseUrl+'/marcas/');
  }

  getModelo(id){
    return new Promise(resolve => {
      this.http.get(this.baseUrl+'/modelos/'+id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getArticuloById(id) {
    return new Promise(resolve => {
      this.http.get(this.baseUrl+'/articulo/'+id).subscribe(data => {
        resolve(data)
      }, err => {
        console.log(err);
      });
    });
  }

  getComentarios(id){
    return new Promise(resolve => {
      this.http.get(this.baseUrl+'/articulo/'+id+'/comentario/').subscribe(data => {
        resolve(data)
      }, err => {
        console.log(err);
      });
    });
  }

  postArticulo(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + '/articulo/', data)
      .subscribe(res => {
        resolve(res);
      }, err => {
        console.log(err);
      });
    });  
  }

  postFoto(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + '/articulo/fotos/', data)
      .subscribe(res => {
        resolve(res);
      }, err => {
        console.log(err);
      });
    });  
  }
}
