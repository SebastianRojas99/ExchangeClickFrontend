import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CurrenciesRoutingModule } from './currencies-routing.module';
import { CurrenciesComponent } from './currencies.component';
import { CurrencylistComponent } from 'src/app/components/currencylist/currencylist.component';
import { CreateCurrencyComponent } from "../../components/create-currency/create-currency.component";


@NgModule({
    declarations: [
        CurrenciesComponent
    ],
    imports: [
        CommonModule,
        CurrenciesRoutingModule,
        CurrencylistComponent,
        CreateCurrencyComponent
    ]
})
export class CurrenciesModule { }
