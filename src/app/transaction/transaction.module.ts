import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { WallettransactionComponent } from './wallettransaction/wallettransaction.component';
import { TopupComponent } from './topup/topup.component';
import { TransferComponent } from './transfer/transfer.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [WallettransactionComponent, TopupComponent, TransferComponent, WithdrawalComponent, PaymentComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
