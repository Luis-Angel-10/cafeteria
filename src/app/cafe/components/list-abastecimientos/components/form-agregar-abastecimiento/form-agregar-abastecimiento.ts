import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { ServcioAbastecimiento } from '../../service/servicio-abastecimiento';
import { ServicioCafeterias } from '../../../../../cafeterias/services/servicio-cafeterias';
import { ServicioProductos } from '../../../../../productos/services/servicio-productos';
import { ProdutosDTO } from '../../../../models/productosDTO';
import { CafeteriasDTO } from '../../../../models/cateteriasDTO';
import { AbastecimientosDTO } from '../../../../models/abastecimientosDTO';

@Component({
  selector: 'app-form-agregar-abastecimiento',
  imports: [ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    RouterLink],
  templateUrl: './form-agregar-abastecimiento.html',
  styleUrl: './form-agregar-abastecimiento.css',
})
export class FormAgregarAbastecimiento {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  private cafeteriasService = inject(ServicioCafeterias);
  private productosService = inject(ServicioProductos);
  private abastecimientoService = inject(ServcioAbastecimiento);

  cafeteriasDataSource!: CafeteriasDTO[];
  productosDataSource!: ProdutosDTO[];

  constructor() {

    this.cafeteriasService.getCafeterias().subscribe((cafeterias) => {
      this.cafeteriasDataSource = cafeterias;
    });

    this.productosService.getProductos().subscribe((productos) => {
      this.productosDataSource = productos;
    });
  }

  form = this.fb.group({
    cantidad: [1, [Validators.required, Validators.min(1)]],
    productoId: ['', [Validators.required]],
    cafeteriaId: ['', [Validators.required]]
  });

  onSubmit(): void {
  if (!this.form.valid) return;

  const v = this.form.value;

  const nuevoAbastecimiento: AbastecimientosDTO = {
    cafeteriaId: Number(v.cafeteriaId),
    productoId: Number(v.productoId),
    cantidad: Number(v.cantidad)
  };

  this.abastecimientoService.postAbastecimiento(nuevoAbastecimiento)
    .subscribe(() => {
      this.router.navigate(['abastecimientos']);
    });

  console.log(nuevoAbastecimiento);
}








}
