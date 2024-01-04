import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { ForgotPassComponent } from './components/pages/forgot-pass/forgot-pass.component';
import { AccountComponent } from './components/pages/account/account.component';
import { CategoryComponent } from './components/partials/category/category.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { PolicyComponent } from './components/pages/policy/policy.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { DesignByYouComponent } from './components/pages/design-by-you/design-by-you.component';
import { IndexComponent } from './components/partials/index/index.component';


const routes: Routes = [
  {
    path: '', component:IndexComponent,
    children: [
      {path: '', component:HomeComponent},
      {path: 'productDetail/:productName', component:ProductDetailComponent},
      {path: 'login', component:LoginComponent},
      {path: 'signup', component:SignupComponent},
      {path: 'forget-pass', component:ForgotPassComponent},
      {path: 'search/:searchTerm', component:HomeComponent},
      {path: 'productDetail/:productId', component:ProductDetailComponent},
      {path: 'account', component:AccountComponent},
      {path: 'catagory/:catagoryName', component: CategoryComponent},
      {path: 'search/:searchTerm', component:HomeComponent},
      {path: 'faq', component:FaqComponent},
      {path: 'policy', component:PolicyComponent},
      {path: 'blog', component:BlogComponent},
      {path: 'aboutus', component: AboutUsComponent},
      {path: 'search/:searchTerm', component:HomeComponent},
      {path: 'aboutus', component: AboutUsComponent},
      {path: 'cart', component: CartComponent},
    ]
  },
  {path: 'design-by-you', component: DesignByYouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
