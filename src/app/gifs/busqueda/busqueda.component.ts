import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

//en el parentis va el nombre del elemento que quiero buscar (la referencia local)
//va a buscar al html un elemento que tenga la referencia local llamada ... y lo asigna al elemento creado
// el operador me dice que esta seguro que nunca sera nulo el resultado
// entre llaves va el tipo de elemeneto que deseo ya que el es generico y podria ser cualquier cosa, en est3e caso es HTMLInput

  @ViewChild("txtbuscar") txtbuscar!:ElementRef <HTMLInputElement>;


  constructor (private gifsService :GifsService){


  }

  buscar(){
    
    const valor= this.txtbuscar.nativeElement.value;

    //si hago enter no pasa nada
    if(valor.trim().length ===0){
      return;
    }

    


    this.gifsService.buscarGifs(valor);
    this.txtbuscar.nativeElement.value="";
  }

}
