import { Injectable } from '@angular/core';import { Router } from '@angular/router';
;
import { Jugador } from 'src/app/modulos/jugador.class'
import { ManosplusService } from './manosplus.service';
import { NumemanoService } from './numemano.service';

//https://desarrolloweb.com/articulos/recorridos-propiedades-objetos-javascript-forin.html
//sessionStorage.clear();

@Injectable({
  providedIn: 'root'
})
export class GenerarjugadoresService {
  
  squad:any;
  squadfin:any;
  
  constructor( private _nm:NumemanoService , private _mp:ManosplusService){
    console.log("servicio de generar jugadores listo.");
  }
  
  crearJugadores( objetodenombres:any ){
    const j1 = new Jugador( objetodenombres.jugador1 ),
          j2 = new Jugador( objetodenombres.jugador2 ),
          j3 = new Jugador( objetodenombres.jugador3 ),
          j4 = new Jugador( objetodenombres.jugador4 );
    this.squad = [j1,j2,j3,j4];
    this.setStorage(JSON.stringify(this.squad));
  }

  setStorage( squad:any ){
    localStorage.setItem('squad',squad);
    localStorage.setItem('mano',`${this._nm.numemano}`);
  }
  
  getStorage(){
    this.squad = JSON.parse(`${localStorage.getItem('squad')}`);
    this._nm.numemano = this._nm.getnumemano();
    this._mp.manosplus = this._mp.getplus();
  }

  checkStorage(){
    return [ JSON.parse(`${localStorage.getItem('squad')}`) , JSON.parse(`${localStorage.getItem('nuke')}`) ];
  }
  
}
