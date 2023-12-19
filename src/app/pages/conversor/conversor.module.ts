import { NgModule,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ConversorRoutingModule } from './conversor-routing.module';
import { ConversorComponent } from './conversor.component';
import { CurrencylistComponent } from 'src/app/components/currencylist/currencylist.component';


@NgModule({
  declarations: [
    ConversorComponent,
    
  ],
  imports: [
    CommonModule,
    ConversorRoutingModule,
    CurrencylistComponent
  ]
})
export class ConversorModule { }
