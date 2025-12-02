<<<<<<< HEAD
import { Component, inject, Inject } from '@angular/core';


@Component({
  selector: 'app-list-cafeterias',
  imports: [],
=======
import { Component, inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatePipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServcioCafeterias } from './service/servicio-cafeterias';
import { ICafeterias } from './models/ICafeterias';
import { CafeteriaDTO } from './models/cafeteriaDTO';

@Component({
  selector: 'app-list-cafeterias',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterLink,
    DatePipe,
  ],
>>>>>>> 4067be81ec04526e28e2a05eb0d0459c25212504
  templateUrl: './list-cafeterias.html',
  styleUrl: './list-cafeterias.css',
})
export class ListCafeterias {

<<<<<<< HEAD
=======
  displayedColumns: string[] = [
    'id', 'nombre', 'ubicacion', 'telefono',
    'horario', 'fechaRegistro', 'actions'
  ];

  cafeteriasDataSource = new MatTableDataSource<CafeteriaDTO>();
  cafeteriasServices = inject(ServcioCafeterias);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(

  ) {}

  ngOnInit() {
    this.cafeteriasServices.getCafeterias().subscribe({
      next: (data) => {
        this.cafeteriasDataSource.data = data;
      }
    });
  }

  ngAfterViewInit() {
    this.cafeteriasDataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.cafeteriasDataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarCafeteria(id: number) {
  if (confirm("¿Seguro que deseas eliminar esta cafetería?")) {
    this.cafeteriasServices.deleteCafeteria(id).subscribe({
      next: () => {
        alert("Cafetería eliminada");
        this.cafeteriasServices.getCafeterias();
      },
      error: (err) => console.error(err)
    });
  }
}

  actualizarCafeteria() {
    this.cafeteriasServices.getCafeterias().subscribe((cafeterias) => {
      this.cafeteriasDataSource.data = cafeterias;
      console.log("Lista de cafeterias actualizada" + cafeterias);
    });
  }

>>>>>>> 4067be81ec04526e28e2a05eb0d0459c25212504
}
