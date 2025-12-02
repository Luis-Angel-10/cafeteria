import { Component, inject } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
 import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { ServcioAbastecimiento } from './service/servicio-abastecimiento';

@Component({
  selector: 'app-list-abastecimientos',
  imports: [MatTableModule, RouterLink, MatAnchor],
  templateUrl: './list-abastecimientos.html',
  styleUrl: './list-abastecimientos.css',
})
export class ListAbastecimientos {
  displayedColumns: string[] = ['id', 'producto' ,'cantidad', 'cafeteria', 'acciones' ];
  abastecimientoDataSource! : any[];

  abastecimientoService = inject(ServcioAbastecimiento);

  constructor() {
    this.actualizar();
  }

  actualizar() {  
      this.abastecimientoService.mostrarTodos().subscribe((abastecimiento) => {
        this.abastecimientoDataSource = abastecimiento;
        console.log(abastecimiento);
      });
    }
}
