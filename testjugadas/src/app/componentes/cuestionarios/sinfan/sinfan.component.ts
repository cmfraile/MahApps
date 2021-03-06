import { Component, OnInit } from '@angular/core';
import { Chinaface } from 'src/app/interfaces/chinaface';
import { CorrectorService } from 'src/app/servicios/corrector.service';
import { JsonhandlerService } from 'src/app/servicios/jsonhandler.service';
import { TestrastestService } from 'src/app/servicios/testrastest.service';
import * as _ from 'underscore';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sinfan',
  templateUrl: './sinfan.component.html'
})
export class SinfanComponent implements OnInit {

  //Condicion : que el random del observable sea 3.
  
  jugada:Chinaface = this._tat.iterador(this._tat.indice[0]).jugada;
  baraja:string[] = this.barajafanes();
  descripcion:string = this.tipodesc();

  constructor( private _jh:JsonhandlerService , public _c:CorrectorService , private _tat:TestrastestService ){
    let random!:number;
    this._tat.obsrandom$.subscribe(resp => random = resp);
    this._tat.obsjugada$.pipe(
      filter(resp => random == 3)
    ).subscribe(resp => {
      this.jugada = resp.jugada;
      this.baraja = this.barajafanes();
      this.descripcion = this.tipodesc();
    });
  }

  jugadascopiassinfan():Chinaface[]{
    let caso:Chinaface[] = [];
    this._jh.jugadas.forEach( jugada => {
      if(jugada.detalles !== ""){ caso.push(jugada) }
    });
    return caso;
  }

  tipodesc():string{
    let jugada:Chinaface = this.jugada;
    let caso!:string;
    if (jugada.detalles){ caso = jugada.detalles };
    if (jugada.detallesHTML){ caso = jugada.detallesHTML };
    return caso;
  }
  
  ngOnInit(): void {}

  barajafanes():string[]{

    const construirbaraja = (jugadapreguntada:Chinaface):string[] => {
      
      const jugadascopia = _.shuffle(this.jugadascopiassinfan());
      let indice:number = jugadascopia.indexOf(jugadapreguntada);
      jugadascopia.splice(indice,1);
      let baraja:string[] = [jugadapreguntada.nombre,jugadascopia[0].nombre,jugadascopia[1].nombre,jugadascopia[2].nombre] ; baraja = _.shuffle(baraja);
      return baraja;

    }

    //Ejecucion:
    return construirbaraja(this.jugada);

  }

  

}
