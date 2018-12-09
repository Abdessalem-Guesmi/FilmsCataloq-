import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FilmsComponent } from './films/films.component';
import { DetailfilmComponent } from './detailfilm/detailfilm.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'detail_film/:id', component:DetailfilmComponent},
  {path:'', redirectTo: '/films', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
