import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProdutosDTO } from '../../cafe/models/productosDTO';

@Injectable({
  providedIn: 'root',
})
export class ServicioProductos {
  private http = inject(HttpClient);
  public getProductos() {
    return this.http.get<[ProdutosDTO]>('http://localhost:5000/api/Productos');
  }
}
