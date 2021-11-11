import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './body/a-home.component';
import { OneComponent } from './body/b-one.component';
import { TwoComponent } from './body/c-two.component';
import { ThreeComponent } from './body/d-three.component';
import { FourComponent } from './body/e-four.component';
import { FiveComponent } from './body/f-five.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent },
  { path: 'four', component: FourComponent },
  { path: 'five', component: FiveComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
