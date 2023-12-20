import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {  FromConversion, ToConversion } from 'src/app/interfaces/currency';
import { ConversionService } from 'src/app/services/conversion.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exchange',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent {

  conversionService = inject(ConversionService)
  quantity:number = 0
@Input() fromconversion:FromConversion  =
{
  currencySymbol:''
  
}
@Input() toconversion:ToConversion =
{
  currencySymbol:''
}

async exchange()
{
const res = await this.conversionService.conversion(this.fromconversion,this.toconversion,this.quantity)
}

}

