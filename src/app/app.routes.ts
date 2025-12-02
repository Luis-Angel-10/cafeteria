import { Routes } from '@angular/router';
import { ListProductos } from './cafe/components/list-productos/list-productos';
import { ListCafeterias } from './cafe/components/list-cafeterias/list-cafeterias';
import { ListDistribuidoras } from './cafe/components/list-distribuidoras/list-distribuidoras';
import { ListAbastecimientos } from './cafe/components/list-abastecimientos/list-abastecimientos';
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
];

