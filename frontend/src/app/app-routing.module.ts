import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { ForgotPassComponent } from './components/pages/forgot-pass/forgot-pass.component';
import { CategoryComponent } from './components/partials/category/category.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'productDetail/:productName', component:ProductDetailComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'forget-pass', component:ForgotPassComponent},
  {path: 'catagory/:catagoryName', component: CategoryComponent},
  {path: 'aboutus', component: AboutUsComponent}
  {path: 'search/:searchTerm', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
