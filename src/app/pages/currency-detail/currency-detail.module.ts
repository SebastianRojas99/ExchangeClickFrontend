import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyDetailRoutingModule } from './currency-detail-routing.module';
import { CurrencyDetailComponent } from './currency-detail.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CurrencyDetailRoutingModule
  ]
})
export class CurrencyDetailModule { }
