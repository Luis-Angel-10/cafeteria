import { Routes } from '@angular/router';
import { ListProductos } from './cafe/components/list-productos/list-productos';
import { ListCafeterias } from './cafe/components/list-cafeterias/list-cafeterias';
import { ListDistribuidoras } from './cafe/components/list-distribuidoras/list-distribuidoras';
import { ListAbastecimientos } from './cafe/components/list-abastecimientos/list-abastecimientos';
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
];

