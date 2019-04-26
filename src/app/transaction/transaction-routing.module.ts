import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferComponent } from './transfer/transfer.component';
import { TopupComponent } from './topup/topup.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { PaymentComponent } from './payment/payment.component';
import { WallettransactionComponent } from './wallettransaction/wallettransaction.component';

const transactionRoutes: Routes = [
  {path:'', component: WallettransactionComponent},
  {path:'top-up', component:TopupComponent},
  {path:'transfer', component:TransferComponent},
  {path:'cash-withdrawal', component:WithdrawalComponent},
  {path:'payment', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(transactionRoutes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
