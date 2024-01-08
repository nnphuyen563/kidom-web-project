import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProductAdminComponent } from './components/admin/product/product.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { AccountComponent } from './components/pages/account/account.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { DesignByYouComponent } from './components/pages/design-by-you/design-by-you.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ForgotPassComponent } from './components/pages/forgot-pass/forgot-pass.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PolicyComponent } from './components/pages/policy/policy.component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { CategoryComponent } from './components/partials/category/category.component';
import { IndexComponent } from './components/partials/index/index.component';

const routes: Routes = [
  {
    //path: 'admin',component:DashboardComponent,canActivate: [RoleGuardService],data: {expectedRole: "ROLE_ADMIN"},
    path: 'admin',
    component: DashboardComponent,
    children: [{ path: 'product', component: ProductAdminComponent }],
  },
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'productDetail/:productName', component: ProductDetailComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'forget-pass', component: ForgotPassComponent },
      { path: 'account', component: AccountComponent },
      { path: 'catagory/:catagoryName', component: CategoryComponent },
      { path: 'search/:searchTerm', component: HomeComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'policy', component: PolicyComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'aboutus', component: AboutUsComponent },
      { path: 'cart', component: CartComponent },
    ],
  },
  { path: 'design-by-you', component: DesignByYouComponent },
];

@NgModule({
  // imports: [
  //   RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  // ],
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
