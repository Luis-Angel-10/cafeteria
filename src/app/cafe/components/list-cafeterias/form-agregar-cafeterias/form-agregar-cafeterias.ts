import { Component, Inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { ServcioCafeterias } from '../service/servicio-cafeterias';
import { CafeteriaDTO } from '../models/cafeteriaDTO';


@Component({
  selector: 'app-form-agregar-cafeterias',
  imports: [ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    RouterLink],
  templateUrl: './form-agregar-cafeterias.html',
  styleUrl: './form-agregar-cafeterias.css',
})
export class FormAgregarCafeterias {
  private  formBuilder = Inject(FormBuilder);
  private route = Inject(Router);
  private cafeteriasServices = Inject(ServcioCafeterias);
  
  cafeteriaDataSource! : CafeteriaDTO[];

  formCafeterias = this.formBuilder.group({
    nombre: ['', Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    direccion: ['', Validators.required,Validators.minLength(3), Validators.maxLength(50)],
    telefono: ['', Validators.minLength(3), Validators.maxLength(50)],
    horario: ['', Validators.minLength(3), Validators.maxLength(50)],
    fechaRegistro: ['', Validators.minLength(3), Validators.maxLength(50)],
    imagen: [''],
  });

 onSubmit() {
    if (!this.formCafeterias.valid) {
      return;
    }
    const cafeteria =this.formCafeterias.value as CafeteriaDTO;
    console.log(cafeteria);

    const formData = new FormData();
    formData.append('nombre', cafeteria.nombre);
    formData.append('direccion', cafeteria.ubicacion);
    formData.append('telefono', cafeteria.telefono);
    formData.append('horario', cafeteria.horario);
    formData.append('fechaRegistro', cafeteria.fechaRegistro.toLocaleDateString());

    this.cafeteriasServices.postCafeterias(formData).subscribe({
      next: () => {
        this.route.navigate(['/cafeterias']);
      },

    });

  } 

  
}
