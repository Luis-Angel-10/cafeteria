import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ServcioCafeterias } from '../../../services/servicio-cafeterias';
import { CafeteriaDTO } from '../models/cafeteriaDTO';

@Component({
  selector: 'app-form-eliminar-cafeterias',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink
  ],
  templateUrl: './form-eliminar-cafeterias.html',
  styleUrl: './form-eliminar-cafeterias.css',
})
export class FormEliminarCafeterias {

  form!: FormGroup;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cafeteriaService = inject(ServcioCafeterias);
  private fb = inject(FormBuilder);

  id!: number;

  ngOnInit(): void {

    this.form = this.fb.group({
      id: [{ value: '', disabled: true }],
      nombre: [{ value: '', disabled: true }],
      ubicacion: [{ value: '', disabled: true }],
      telefono: [{ value: '', disabled: true }],
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.cafeteriaService.getCafeteriaById(this.id).subscribe((data) => {
      this.form.patchValue({
        id: data.id,
        nombre: data.nombre,
        ubicacion: data.ubicacion,
        telefono: data.telefono,
      });
    });
  }

  eliminar(): void {
    this.cafeteriaService.deleteCafeteria(this.id).subscribe(() => {
      this.router.navigate(['/Cafeteria']);
    });
  }
}
