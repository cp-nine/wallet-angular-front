import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TransactionsreportComponent } from './components/transactionsreport/transactionsreport.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentreportComponent } from './components/paymentreport/paymentreport.component';

const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'login', component: LoginComponent},
  {path:'profile', component: ProfileComponent},
  {path:'transaction', loadChildren:'./transaction/transaction.module#TransactionModule'},
  {path:'activity', component: TransactionsreportComponent},
  {path:'payment-report', component: PaymentreportComponent},
  {path:'**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
