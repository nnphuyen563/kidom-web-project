import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { ForgotPassComponent } from './components/pages/forgot-pass/forgot-pass.component';
import { CategoryComponent } from './components/partials/category/category.component';
import { DesignByYouComponent } from './components/pages/design-by-you/design-by-you.component';
import { BodyComponent } from './components/admin/body/body.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CoupensComponent } from './components/admin/coupens/coupens.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { SidenavComponent } from './components/admin/sidenav/sidenav.component';
import { UsersComponent } from './components/admin/users/users.component';
import { IndexComponent } from './components/partials/index/index.component';

const routes: Routes = [
  {
    path: 'admin', component:BodyComponent,
    children:[
      {path: 'dashboard', component:DashboardComponent},
      {path: 'coupens', component:CoupensComponent},
      {path: 'products', component:ProductsComponent},
      {path: 'sidenav', component:SidenavComponent},
      {path: 'users', component:UsersComponent}
    ]
  },
  {
    path: '', component:IndexComponent,
    children: [
      {path:'',component:HomeComponent},
      {path: 'productDetail/:productName', component:ProductDetailComponent},
      {path: 'login', component:LoginComponent},
      {path: 'signup', component:SignupComponent},
      {path: 'forget-pass', component:ForgotPassComponent},
      {path: 'catagory/:catagoryName', component: CategoryComponent},
      {path: 'search/:searchTerm', component:HomeComponent}
    ]
  },
  {
    path: 'design-by-you', component:DesignByYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
