import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForinicioComponent } from './componentes/forinicio/forinicio.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RepartesillasComponent } from './componentes/repartesillas/repartesillas.component';
import { LetreroComponent } from './componentes/letrero/letrero.component';
import { VientoPipe } from './tuberias/viento.pipe';
import { PosicionPipe } from './tuberias/posicion.pipe';
import { PuntosPipe } from './tuberias/puntos.pipe';
import { FormahjongComponent } from './componentes/formahjong/formahjong.component';
import { RidfinalPipe } from './tuberias/ridfinal.pipe';
import { FindejuegoComponent } from './componentes/findejuego/findejuego.component';
import { ReseteadorComponent } from './componentes/comun/reseteador/reseteador.component';
import { ManosplusComponent } from './componentes/comun/manosplus/manosplus.component';
import { CambiosillasComponent } from './componentes/comun/cambiosillas/cambiosillas.component';

@NgModule({
  declarations: [
    AppComponent,
    ForinicioComponent,
    RepartesillasComponent,
    LetreroComponent,
    VientoPipe,
    PosicionPipe,
    PuntosPipe,
    FormahjongComponent,
    RidfinalPipe,
    FindejuegoComponent,
    ReseteadorComponent,
    ManosplusComponent,
    CambiosillasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
