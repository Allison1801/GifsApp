import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ContactReactiveComponent } from '../contact-reactive/contact-reactive.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent,
    FormularioComponent,
   
  ],
  exports:[
    GifsPageComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
