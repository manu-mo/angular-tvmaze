import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ApiService } from './Api/api.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'home/:query', component: HomePageComponent,
    resolve: {
      shows: 
        (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
          return inject(ApiService).searchShow(route.paramMap.get('query')!);
        },
      
    },
  },
  {
    path: 'detail/:id', component: DetailPageComponent,
    resolve: {
      show: 
        (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
          return inject(ApiService).getShowDetail(route.paramMap.get('id')!);
        },
    },
  },
  { path: '**', component: HomePageComponent } //normalmente si mette un componente specifico PageNotFoundComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
