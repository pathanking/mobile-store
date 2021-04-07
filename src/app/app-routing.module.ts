import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './mobile/add/add.component';
import { ShowComponent } from './mobile/show/show.component';


const routes: Routes = [
  {path:"add",component:AddComponent},
  {path:"show",component:ShowComponent},
  {path:'',redirectTo:"show",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
