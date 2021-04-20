import { Component, OnInit, Input } from '@angular/core';
import { Chinaface } from 'src/app/interfaces/chinaface';
import { JsonhandlerService } from 'src/app/servicios/jsonhandler.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-sindesc',
  templateUrl: './sindesc.component.html'
})
export class SindescComponent implements OnInit {

  //1,2,4,6,8,32
  
  @Input() jugadasReadonlyChild!:Chinaface;
  jugadascopia = this.jugadascopiasindesc(this._jh.jugadas);
  
  constructor( private _jh:JsonhandlerService ){}

  ngOnInit(): void {}

  jugadascopiasindesc(jugadas:Chinaface[]):Chinaface[]{
    let caso:Chinaface[] = [];
    this._jh.jugadas.forEach(jugada => {
      if(jugada.detalles == ""){ caso.push(jugada) };
    });
    return caso;
  }

  barajapuntos(jugada:Chinaface):number[]{
    let arraypuntos:number[] = [1,2,4,6,8,32]; arraypuntos = _.shuffle(arraypuntos) ;
    let preguntarray:number[] = [jugada.puntos];
    let indice:number = arraypuntos.indexOf(jugada.puntos) ; arraypuntos.splice(indice,1);
    preguntarray.push(arraypuntos[0],arraypuntos[1],arraypuntos[2]) ; preguntarray = _.shuffle(preguntarray);
    return preguntarray;
  }

}