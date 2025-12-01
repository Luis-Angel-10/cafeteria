import { Routes } from '@angular/router';
import { ListProductos } from './cafe/components/list-productos/list-productos';
import { ListCafeterias } from './cafe/components/list-cafeterias/list-cafeterias';
import { ListDistribuidoras } from './cafe/components/list-distribuidoras/list-distribuidoras';
import { ListAbastecimientos } from './cafe/components/list-abastecimientos/list-abastecimientos';


export const routes: Routes = [
{path: 'Productos', component: ListProductos},
{path: 'Cafeteria', component: ListCafeterias},
{path: 'Distribuidora', component: ListDistribuidoras},
{path: 'Abastecimientos', component: ListAbastecimientos}
];

