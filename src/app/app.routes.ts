import { Routes } from '@angular/router';
import { ListProductos } from './cafe/components/list-productos/list-productos';
import { ListCafeterias } from './cafe/components/list-cafeterias/list-cafeterias';
import { ListDistribuidoras } from './cafe/components/list-distribuidoras/list-distribuidoras';
import { ListAbastecimientos } from './cafe/components/list-abastecimientos/list-abastecimientos';
<<<<<<< HEAD
import { FormAgregarAbastecimiento } from './cafe/components/list-abastecimientos/components/form-agregar-abastecimiento/form-agregar-abastecimiento';
import { FormActualizarAbastecimiento } from './cafe/components/list-abastecimientos/components/form-actualizar-abastecimiento/form-actualizar-abastecimiento';
import { FormEliminarAbastecimiento } from './cafe/components/list-abastecimientos/components/form-eliminar-abastecimiento/form-eliminar-abastecimiento';


export const routes: Routes = [
{path: 'productos', component: ListProductos},
{path: 'cafeteria', component: ListCafeterias},
{path: 'distribuidora', component: ListDistribuidoras},
{path: 'abastecimientos', component: ListAbastecimientos},
{path: 'abastecimientos/agregar', component: FormAgregarAbastecimiento},
{path: 'abastecimientos/actualizar/:id', component: FormActualizarAbastecimiento},
{path: 'abastecimientos/eliminar/:id', component: FormEliminarAbastecimiento}
=======
import { FormAgregarCafeterias } from './cafe/components/list-cafeterias/form-agregar-cafeterias/form-agregar-cafeterias';
import { FormEliminarCafeterias } from './cafe/components/list-cafeterias/form-eliminar-cafeterias/form-eliminar-cafeterias';
import { FormActualizarCafeterias } from './cafe/components/list-cafeterias/form-actualizar-cafeterias/form-actualizar-cafeterias';


export const routes: Routes = [
{path: 'Productos', component: ListProductos},

{path: 'Cafeteria', component: ListCafeterias},
{path: 'cafeteria/crear', component: FormAgregarCafeterias},
{path: 'cafeteria/actualizar/:id', component: FormActualizarCafeterias},
{path: 'cafeteria/eliminar/:id', component: FormEliminarCafeterias},


{path: 'Distribuidora', component: ListDistribuidoras},
{path: 'Abastecimientos', component: ListAbastecimientos}
>>>>>>> 4067be81ec04526e28e2a05eb0d0459c25212504
];

