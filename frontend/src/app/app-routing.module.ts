import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { ForgotPassComponent } from './components/pages/forgot-pass/forgot-pass.component';
<<<<<<< HEAD
import { AccountComponent } from './components/pages/account/account.component';
=======
import { CategoryComponent } from './components/partials/category/category.component';
>>>>>>> 0db53822d9b72b2f594ce3986e6127398b27f114

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'productDetail/:productName', component:ProductDetailComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'forget-pass', component:ForgotPassComponent},
<<<<<<< HEAD
  {path: 'search/:searchTerm', component:HomeComponent},
  {path: 'productDetail/:productId', component:ProductDetailComponent},
  {path: 'account', component:AccountComponent},
=======
  {path: 'catagory/:catagoryName', component: CategoryComponent},
  {path: 'search/:searchTerm', component:HomeComponent}
>>>>>>> 0db53822d9b72b2f594ce3986e6127398b27f114
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
