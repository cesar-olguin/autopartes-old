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

  

  getArticuloById(id) {
    return new Promise(resolve => {
      this.http.get(this.baseUrl+'/articulo/'+id).subscribe(data => {
        resolve(data),
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
