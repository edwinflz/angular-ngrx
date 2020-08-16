import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/films',
        pathMatch: 'full',
      },
      {
        path: 'films',
        loadChildren: () => import('./films/films.module').then(m => m.FilmsModule)
      },
      {
        path: 'characters',
        loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
      preloadingStrategy: PreloadAllModules
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
