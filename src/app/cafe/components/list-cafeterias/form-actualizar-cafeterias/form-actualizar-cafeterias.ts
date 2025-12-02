import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { ServcioCafeterias } from '../../../services/servicio-cafeterias';
import { CafeteriaDTO } from '../models/cafeteriaDTO';

@Component({
  selector: 'app-form-actualizar-cafeterias',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './form-actualizar-cafeterias.html',
  styleUrl: './form-actualizar-cafeterias.css',
})
export class FormActualizarCafeterias {

  private router = inject(Router);
  private cafeteriaService = inject(ServcioCafeterias);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);

  id!: number;
  cafeteria!: CafeteriaDTO;

  form = this.fb.group({
    nombre: ['', Validators.required],
    ubicacion: ['', Validators.required],
    telefono: [''],
    horario: [''],
    descripcion: [''],
  });

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.cafeteriaService.getCafeteriaById(this.id).subscribe((cafeteria) => {
      this.cafeteria = cafeteria;

      this.form.patchValue({
        nombre: cafeteria.nombre,
        ubicacion: cafeteria.ubicacion,
        telefono: cafeteria.telefono,
        horario: cafeteria.horario,
        descripcion: cafeteria.descripcion,
      });
    });
  }

  onSubmit(): void {
    if (!this.form.valid) return;

    const cafeteriaActualizada = {
      ...this.cafeteria,
      ...this.form.value
    } as CafeteriaDTO;

    this.cafeteriaService.putCafeterias(cafeteriaActualizada).subscribe(() => {
      this.router.navigate(['/Cafeteria']); 
    });
  }
}
