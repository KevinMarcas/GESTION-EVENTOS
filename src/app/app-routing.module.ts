import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from '@modules/auth/pages/auth-page/auth-page.component';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { HeaderComponent } from '@shared/components/header/header.component';





const routes: Routes = [
  //path o ruta normal {path:'home' , component:HomePageComponent}
  //Uso de LazyLoading : cargamos modulos.
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'',
    component: HomePageComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
