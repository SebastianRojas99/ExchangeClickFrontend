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
  @Input() fromconversion:FromConversion  = { currencySymbol:'' };
  @Input() toconversion:ToConversion = { currencySymbol:'' };
  conversionresult:number = 0
  async exchange() {
    try {
      const res = await this.conversionService.conversion(
        this.fromconversion,
        this.toconversion,
        this.quantity
      );
      this.conversionresult = Number(res.conversionRate);
    } catch (error) {
      // Handle errors...
    }
  }
async swap() {
  // Create a temporary variable to hold the `fromconversion` symbol
  const tempSymbol = this.fromconversion.currencySymbol;

  // Swap the symbols visually
  this.fromconversion.currencySymbol = this.toconversion.currencySymbol;
  this.toconversion.currencySymbol = tempSymbol;
}
}

