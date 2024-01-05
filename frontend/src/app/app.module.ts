import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountAdminComponent } from './components/admin/account/account.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProductAdminComponent } from './components/admin/product/product.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { AccountComponent } from './components/pages/account/account.component';
import { BlogDetailComponent } from './components/pages/blog-detail/blog-detail.component';
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
import { FooterComponent } from './components/partials/footer/footer.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { MenuComponent } from './components/partials/menu/menu.component';
import { SearchComponent } from './components/partials/search/search.component';
import { StarRatingComponent } from './components/partials/star-rating/star-rating.component';
import { TitleComponent } from './components/partials/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
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
    PolicyComponent,
    TitleComponent,
    ProductAdminComponent,
    AccountAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    CardModule,
    DialogModule,
    ToastModule,
    ButtonModule,
    TableModule,
    InputNumberModule,
    ToolbarModule,
    FileUploadModule,
    ConfirmDialogModule,
    InputTextareaModule,
    InputTextModule,
    RadioButtonModule,
    DividerModule,
    CarouselModule,
    OverlayPanelModule,
    TabViewModule,
    PasswordModule,
    SliderModule,
    DataViewModule,
    MultiSelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
