import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFilmsComponent } from './components/list-films/list-films.component';
import { DetailFilmsComponent } from './components/detail-films/detail-films.component';


const routes: Routes = [
  {
    path: '',
    component: ListFilmsComponent
  },
  {
    path: ':id',
    component: DetailFilmsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
