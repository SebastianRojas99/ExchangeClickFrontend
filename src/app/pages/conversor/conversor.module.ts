import { NgModule,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ConversorRoutingModule } from './conversor-routing.module';
import { ConversorComponent } from './conversor.component';
import { CurrencylistComponent } from 'src/app/components/currencylist/currencylist.component';
import { ExchangeComponent } from 'src/app/components/exchange/exchange.component';
import { SubscriptioncountComponent } from "../../components/subscriptioncount/subscriptioncount.component";


@NgModule({
    declarations: [
        ConversorComponent,
    ],
    imports: [
        CommonModule,
        ConversorRoutingModule,
        CurrencylistComponent,
        ExchangeComponent,
        SubscriptioncountComponent
    ]
})
export class ConversorModule { }
