import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TransactionsreportComponent } from './components/transactionsreport/transactionsreport.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentreportComponent } from './components/paymentreport/paymentreport.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { WalletGuard } from './guards/wallet/wallet.guard';

const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path:'dashboard', component: DashboardComponent, canActivate: [WalletGuard]},
  {path:'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate: [WalletGuard]},
  {path:'transaction', loadChildren:'./transaction/transaction.module#TransactionModule', canActivate: [WalletGuard]},
  {path:'activity', component: TransactionsreportComponent, canActivate: [WalletGuard]},
  {path:'payment-report', component: PaymentreportComponent, canActivate: [WalletGuard]},
  {path:'**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
