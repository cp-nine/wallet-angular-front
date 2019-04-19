import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { BreadcrumbComponent } from './nav/breadcrumb/breadcrumb.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AccountlistComponent } from './components/accountlist/accountlist.component';
import { TransactionsreportComponent } from './components/transactionsreport/transactionsreport.component';
import { EditcustprofileComponent } from './components/forms/editcustprofile/editcustprofile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    BreadcrumbComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    ProfileComponent,
    AccountlistComponent,
    TransactionsreportComponent,
    EditcustprofileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
