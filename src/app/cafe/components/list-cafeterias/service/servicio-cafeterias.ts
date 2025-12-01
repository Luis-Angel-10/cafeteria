import { HttpClient } from "@angular/common/http";
import { inject, Inject, Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment.development";
import { Observable } from "rxjs";
import { CafeteriaDTO } from "../models/cafeteriaDTO";


@Injectable({
  providedIn: 'root'
})

export class ServcioCafeterias {

    private http = inject(HttpClient);
    private urlCafeterias = environment.apiURL + 'Cafeterias';

    public getCafeterias():Observable<CafeteriaDTO[]> {
        return this.http.get<CafeteriaDTO[]>(this.urlCafeterias);
    }

    public postCafeterias(formData: FormData) {
        return this.http.post(this.urlCafeterias, formData);
    }

    public getCafeteriaById(id: number):Observable<CafeteriaDTO> {
        return this.http.get<CafeteriaDTO>(`${this.urlCafeterias}/${id}`);
    }

    public putCafeterias(cafeteria: CafeteriaDTO) {
        return this.http.put(`${this.urlCafeterias}/${cafeteria.id}`, cafeteria);
    }

    public deleteCafeteria(id: number) {
        return this.http.delete(`${this.urlCafeterias}/${id}`);
    }
    
    public getCafeteriasByNombre(nombre: string):Observable<CafeteriaDTO[]> {
        return this.http.get<CafeteriaDTO[]>(`${this.urlCafeterias}/nombre/${nombre}`);
    }

}
