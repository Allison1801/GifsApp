import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

//permite que sea global con el root
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = "YKkPTHYSxHkcxT1zOMQegAtogA3C1lpy";
  private servicioUrl: string = "https://api.giphy.com/v1/gifs"
  private _historial : string [] = [];
  private _formulario : string [] = [];
 
  
  public resultados: Gif[] = [];

  get historial(){
    return [...this._historial];
  }

  get formulario(){
    return [...this._historial];
  }
  
  constructor (private http:HttpClient){
     
    this._historial=JSON.parse(localStorage.getItem('historial')!)||[];
    this.resultados=JSON.parse(localStorage.getItem('resultados')!)||[];
    this._formulario=JSON.parse(localStorage.getItem('formulario')!)||[];
     
  }
  
   
  buscarGifs (query: string = '' ){
    query = query.trim().toLocaleLowerCase();
    if( !this._historial.includes(query)){
      this._historial.unshift(query);
      //limitar la cantidad de insercionssses que sean solo 10
      this._historial  = this._historial.splice(0,10)

      localStorage.setItem("historial",JSON.stringify(this._historial));

    }

  

     const params = new HttpParams()
       .set('api_key',this.apiKey)
       .set('limit','10')
       .set('q',query);
    
     console.log(params);

    
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
                  .subscribe( (resp) => {
                  console.log(resp.data);
                  this.resultados = resp.data;
                  localStorage.setItem('resultados', JSON.stringify(this.resultados));
                  });

    
    
     }


     //----------------------------------------

     buscarRegistro (){
      
      console.log("hola");
      
       }
  
  
}
