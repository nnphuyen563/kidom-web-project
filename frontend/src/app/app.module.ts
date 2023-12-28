import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { MenuComponent } from './components/partials/menu/menu.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { ForgotPassComponent } from './components/pages/forgot-pass/forgot-pass.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { AccountComponent } from './components/pages/account/account.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailComponent } from './components/pages/blog-detail/blog-detail.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CategoryComponent } from './components/partials/category/category.component';
import { StarRatingComponent } from './components/partials/star-rating/star-rating.component';
import { SearchComponent } from './components/partials/search/search.component';
import { DesignByYouComponent } from './components/pages/design-by-you/design-by-you.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { PolicyComponent } from './components/pages/policy/policy.component';

import { ReactiveFormsModule } from '@angular/forms';
//import { TitleComponent } from './components/partials/title/title.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ProductDetailComponent,
    LoginComponent,
    SignupComponent,
    ForgotPassComponent,
    AboutUsComponent,
    AccountComponent,
    BlogComponent,
    BlogDetailComponent,
    CartComponent,
    CategoryComponent,
    StarRatingComponent,
    SearchComponent,
    DesignByYouComponent,
    FaqComponent,
    PolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
