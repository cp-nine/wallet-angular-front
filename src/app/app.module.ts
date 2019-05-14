import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { BreadcrumbComponent } from './nav/breadcrumb/breadcrumb.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TransactionsreportComponent } from './components/transactionsreport/transactionsreport.component';
import { EditcustprofileComponent } from './components/forms/editcustprofile/editcustprofile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentreportComponent } from './components/paymentreport/paymentreport.component';
import { ModaladdaccountComponent } from './forms/modaladdaccount/modaladdaccount.component';
import { UpdatePasswordComponent } from './components/forms/update-password/update-password.component';
import { EditWalletNameComponent } from './components/edit-wallet-name/edit-wallet-name.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    BreadcrumbComponent,
    LoginComponent,
    PagenotfoundComponent,
    ProfileComponent,
    TransactionsreportComponent,
    EditcustprofileComponent,
    DashboardComponent,
    PaymentreportComponent,
    ModaladdaccountComponent,
    UpdatePasswordComponent,
    EditWalletNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
