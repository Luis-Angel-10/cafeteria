import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CafeteriasDTO } from '../../cafe/models/cateteriasDTO';

@Injectable({
  providedIn: 'root',
})
export class ServicioCafeterias {
  private http = inject(HttpClient);
  public getCafeterias() {
    return this.http.get<[CafeteriasDTO]>('http://localhost:5000/api/Cafeterias');
  }
}
