import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrutableComponent } from './enrutable/enrutable.component';

const routes: Routes = [
  {
    path:'',
    component:EnrutableComponent
  }
  ,
  {
    path:'enrutable/:id',
    component:EnrutableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
