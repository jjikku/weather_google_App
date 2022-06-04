import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleComponent } from './google/google.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:"home",component:HomeComponent},
{path:"google",component:GoogleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
