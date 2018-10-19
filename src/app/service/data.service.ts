import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly endurl = 'http://aplicaciones.telebucaramanga.com.co/server_testdav/controllers/clientes';

  constructor(private httpClient: HttpClient) {

   }


   getClientes(){
    let metodo = 'obtener-clientes';
    return this.httpClient.get<any[]>(this.endurl+'?metodo='+metodo);
   }

   countClientes(){
    let metodo = 'contar-clientes';
    return this.httpClient.get<any[]>(this.endurl+'?metodo='+metodo);
   }

   addCliente(params:any){
    let metodo = 'crear-cliente';
    let body = {"data": {"cliente":params, "metodo": metodo} };
    return this.httpClient.post<any[]>(this.endurl,body);
   }

   deleteCliente(params:any){
    let metodo = 'eliminar-cliente';
    let body = {"data": {"cliente":params, "metodo": metodo} };
    return this.httpClient.post<any[]>(this.endurl,body);
   }



}
