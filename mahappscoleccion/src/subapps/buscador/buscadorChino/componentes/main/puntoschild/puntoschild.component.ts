import { Component, Input, OnInit } from '@angular/core';
import { Chinaface } from '../../../interfaz/chinaface';

@Component({
  selector: 'app-puntoschild',
  templateUrl: './puntoschild.component.html'
})
export class PuntoschildComponent implements OnInit{

  @Input() jugadahija!:Chinaface[];
  
  constructor(){}
  
  ngOnInit(): void {}

  //Funciones transformadoras:
  tiposprint(arraydetipos:number[]):string[]{
    let arraytraducido:string[] = [];
    arraydetipos.forEach(tipo => {
      switch(tipo){
        case 1: arraytraducido.push("chi") ; break ;
        case 2: arraytraducido.push("pong") ; break ;
        case 3: arraytraducido.push("kong") ; break ;
        case 4: arraytraducido.push("ponkon") ; break ;
        case 5: arraytraducido.push("accion") ; break ;
        case 6: arraytraducido.push("filtro") ; break ;
        case 7: arraytraducido.push("manoculta") ; break ;
        case 8: arraytraducido.push("familias") ; break ;
        case 9: arraytraducido.push("simples") ; break ;
        case 10: arraytraducido.push("terminales") ; break ;
        case 11: arraytraducido.push("honores") ; break ;
        case 12: arraytraducido.push("vientos") ; break ;
        case 13: arraytraducido.push("dragones") ; break ;
      }
    });
    return arraytraducido;
  }

  packsprint(packs:number,pareja:boolean):string{
   const parejastring = (pareja:boolean) => { if (pareja == true){ return "P" } else { return "" } };
   const packisnull = (packs:number) => { if (packs == 0){ return "" } else { return packs } } ;
   let arraydevolver:string = "";
   arraydevolver = arraydevolver.concat(`${packisnull(packs)}`);
   arraydevolver = arraydevolver.concat(`${parejastring(pareja)}`);
   return arraydevolver;
  };

  separarpuntos(jugadahija:Chinaface[]):string{
    let caso:boolean;
    switch(jugadahija[1]){
      case undefined : caso = true ; break ;
      default :
      if (jugadahija[0].puntos == jugadahija[1].puntos){
        caso = false;
      } else {
        caso = true;
      }; break ;
    }
    if (caso == true){return "margensup"} else {return ""};
  }

  estilocolorgrupo(puntos:number):string{
    let caso!:string;
    switch(puntos){
      
      case 1: caso = "t1" ; break ;
      case 2: caso = "t2" ; break ;
      case 4: caso = "t3" ; break ;
      case 6: caso = "t4" ; break ;

      case 8: caso = "t5" ; break ;
      case 12: caso = "t6" ; break ;
      case 16: caso = "t7" ; break ;
      case 24: caso = "t8" ; break ;

      case 32: caso = "t9" ; break ;
      case 48: caso = "t10" ; break ;
      case 64: caso = "t11" ; break ;
      case 88: caso = "t12" ; break ;
    
    }
    return caso;
  }

  separarow(jugadahija:Chinaface[]){
    return `${this.separarpuntos(jugadahija)} ${this.estilocolorgrupo(jugadahija[0].puntos)}`;
  }


}
