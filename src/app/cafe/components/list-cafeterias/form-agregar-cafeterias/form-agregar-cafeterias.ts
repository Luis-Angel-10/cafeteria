import { Component, inject } from '@angular/core';
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
import { CafeteriaCreateDTO } from '../models/CafeteriaCreateDO';

@Component({
  selector: 'app-form-agregar-cafeterias',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    RouterLink
  ],
  templateUrl: './form-agregar-cafeterias.html',
  styleUrl: './form-agregar-cafeterias.css',
})
export class FormAgregarCafeterias {

  private formBuilder = inject(FormBuilder);
  private route = inject(Router);
  private cafeteriasServices = inject(ServcioCafeterias);

  formCafeterias = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    ubicacion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    latitud: ['', [Validators.required]],
    longitud: ['', [Validators.required]],
    telefono: ['', [Validators.minLength(3), Validators.maxLength(50)]],
    horario: ['', [Validators.required]],
    fechaRegistro: ['', [Validators.required]],
  });

  onSubmit() {
    if (!this.formCafeterias.valid) {
      return;
    }

    const cafeteria = this.formCafeterias.value as unknown as CafeteriaCreateDTO;
    
    console.log(cafeteria);
    const formData = new FormData();
    formData.append('nombre', cafeteria.nombre!);
    formData.append('ubicacion', cafeteria.ubicacion!);
    formData.append('telefono', cafeteria.telefono!);
    formData.append('horario', cafeteria.horario!);
    formData.append('fechaRegistro', cafeteria.fechaRegistro.toLocaleDateString());


    this.cafeteriasServices.postCafeterias(formData).subscribe(() => {
      this.route.navigate(['/cafeterias']);
    });
  }
}
