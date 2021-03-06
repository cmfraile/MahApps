import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chinaface } from 'src/app/interfaz/chinaface';
//import prueba from 'src/assets/jsons/china.json'

//Tutorial del que me he servido:
//https://blog.nubecolectiva.com/como-leer-un-archivo-json-en-una-tabla-de-bootstrap-4-con-angular-8/

//tutorial para la variante HTTP:
//https://medium.com/@ingenieromaciasgil/consumiendo-un-archivo-json-en-angular-d88fea1995ec

@Injectable({
  providedIn: 'root'
})
export class JsonhandlerService {
  
  constructor( private _http:HttpClient ){}
  
  getJSON():Observable<Chinaface[]>{ return this._http.get<Chinaface[]>("../assets/jsons/china.json"); }

}
