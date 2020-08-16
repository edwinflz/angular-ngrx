import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';

const routes: Routes = [
  {
    path: '',
    component: ListCharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
