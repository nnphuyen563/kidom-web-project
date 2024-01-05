import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProductAdminComponent } from './components/admin/product/product.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { ForgotPassComponent } from './components/pages/forgot-pass/forgot-pass.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { CategoryComponent } from './components/partials/category/category.component';

const routes: Routes = [
  {
    //path: 'admin',component:DashboardComponent,canActivate: [RoleGuardService],data: {expectedRole: "ROLE_ADMIN"},
    path: 'admin',
    component: DashboardComponent,
    children: [{ path: 'product', component: ProductAdminComponent }],
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'productDetail/:productName', component: ProductDetailComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'forget-pass', component: ForgotPassComponent },
      { path: 'catagory/:catagoryName', component: CategoryComponent },
      { path: 'aboutus', component: AboutUsComponent },
      { path: 'search/:searchTerm', component: HomeComponent },
      { path: 'aboutus', component: AboutUsComponent },
      { path: 'cart', component: CartComponent },
    ],
  },
];

@NgModule({
  // imports: [
  //   RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  // ],
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
