import { HttpClient } from "@angular/common/http";
import { inject, Inject, Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment.development";
import { Observable } from "rxjs";
import { AbastecimientosDTO } from "../../../models/abastecimientosDTO";


@Injectable({
  providedIn: 'root'
})

export class ServcioAbastecimiento {

    private http = inject(HttpClient);
    private urlAbastecimiento = environment.apiURL + 'abastecimientos';

    public getAbastecimiento():Observable<AbastecimientosDTO[]> {
        return this.http.get<AbastecimientosDTO[]>(this.urlAbastecimiento);
    }

    public postAbastecimiento(abastecimiento: AbastecimientosDTO) {
        return this.http.post(this.urlAbastecimiento, abastecimiento);
    }   

    public putAbastecimiento(abastecimiento: AbastecimientosDTO) {
        return this.http.put(`${this.urlAbastecimiento}/${abastecimiento.id}`, abastecimiento);
    }

    public deleteAbastecimiento(id: number) {
        return this.http.delete(`${this.urlAbastecimiento}/${id}`);
    }
    
    mostrarTodos(): Observable<any> {
        return this.http.get(`${this.urlAbastecimiento}/MostrarTodos`);
    }

}
