import { Component, inject, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ICafeterias } from './models/ICafeterias';
import { RouterLink } from "@angular/router";
import { MatTableModule } from '@angular/material/table';
import { ServcioCafeterias } from './service/servicio-cafeterias';


@Component({
  selector: 'app-list-cafeterias',
  imports: [MatTableModule, RouterLink, MatAnchor],
  templateUrl: './list-cafeterias.html',
  styleUrl: './list-cafeterias.css',
})
export class ListCafeterias {

  displayedColumns: string[] = ['id','nombre', 'ubicacion', 'telefono', 'horario', 'fechaRegistro'];
  cafeteriasDataSource! : any[];
  cafeteriasServices = inject(ServcioCafeterias);

  constructor() {
    
  }

  eliminarCafeteria(id: number) {
    console.log("Eliminar cafeteria con id: " + id);
  }

  

}
