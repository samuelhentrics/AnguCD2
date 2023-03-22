import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCDsComponent } from './list-cds/list-cds.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'listcd', component: ListCDsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  // Si c'est pas mis, les objets crées dans le module ne sont pas accessibles dans les autres modules
  exports: [RouterModule]
})
export class AppRoutingModule { }
