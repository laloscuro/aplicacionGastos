import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureModule } from '../modules/feature/feature.module';
import { InfoModule } from '../modules/info/info.module';
import { NotFoundModule } from '../components/not-found/not-found.module';
import { FormsModule } from '@angular/forms';
import { FormulariosModule } from '../modules/formularios/formularios.module';
import { UsersModule } from '../modules/users/users.module';
import { LoginModule } from '../modules/login/login.module';

const routes: Routes = [
  {
    path:'enrutable',
    loadChildren: ()=> FeatureModule
  },
  {
    path:'not-found',
    loadChildren:()=> NotFoundModule
  },
  {
    path:'info',
    loadChildren: () => InfoModule
  },
  {
    path:'forms',
    loadChildren: () => FormulariosModule
  },
  {
    path:'users',
    loadChildren: () => UsersModule
  },
  {
    path:'login',
    loadChildren: () => LoginModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
