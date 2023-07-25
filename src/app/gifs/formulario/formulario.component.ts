import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { registro } from '../interfaces/registro.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario: registro[] = [];

  constructor(private gifService:GifsService){}
    
    get Formulario(){
      return this.gifService.formulario;

    }

    

}
