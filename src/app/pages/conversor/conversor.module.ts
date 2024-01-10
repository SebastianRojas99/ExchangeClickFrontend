import { NgModule,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ConversorRoutingModule } from './conversor-routing.module';
import { ConversorComponent } from './conversor.component';
import { CurrencylistComponent } from 'src/app/components/currencylist/currencylist.component';
import { ExchangeComponent } from 'src/app/components/exchange/exchange.component';
import { SubscriptioncountComponent } from "../../components/subscriptioncount/subscriptioncount.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { ProfileComponent } from '../profile/profile.component';
import { ProfileIconComponent } from "../../components/profile-icon/profile-icon.component";


@NgModule({
    declarations: [
        ConversorComponent,
    ],
    imports: [
        CommonModule,
        ConversorRoutingModule,
        CurrencylistComponent,
        ExchangeComponent,
        SubscriptioncountComponent,
        SidebarComponent,
        ProfileIconComponent
    ]
})
export class ConversorModule { }
