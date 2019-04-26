import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TransactionRoutingModule } from './transaction-routing.module';
import { WallettransactionComponent } from './wallettransaction/wallettransaction.component';
import { TopupComponent } from './topup/topup.component';
import { TransferComponent } from './transfer/transfer.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaintopupComponent } from './forms/maintopup/maintopup.component';
import { TopupByaccountComponent } from './forms/topup-byaccount/topup-byaccount.component';
import { MainTransferComponent } from './forms/main-transfer/main-transfer.component';
import { TransferWtwComponent } from './forms/transfer-wtw/transfer-wtw.component';
import { TransferWtaComponent } from './forms/transfer-wta/transfer-wta.component';
import { MainCashComponent } from './forms/main-cash/main-cash.component';
import { CashAccountComponent } from './forms/cash-account/cash-account.component';
import { Wallettransaction2Component } from './wallettransaction2/wallettransaction2.component';
import { Topup2Component } from './forms/topup2/topup2.component';
import { Transfer2Component } from './forms/transfer2/transfer2.component';
import { Cash2Component } from './forms/cash2/cash2.component';

@NgModule({
  declarations: [WallettransactionComponent, TopupComponent, TransferComponent, WithdrawalComponent, PaymentComponent, MaintopupComponent, TopupByaccountComponent, MainTransferComponent, TransferWtwComponent, TransferWtaComponent, MainCashComponent, CashAccountComponent, Wallettransaction2Component, Topup2Component, Transfer2Component, Cash2Component],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TransactionModule { }
