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
async exchange() {
  try {
    const res = await this.conversionService.conversion(
      this.fromconversion,
      this.toconversion,
      this.quantity
  );
      console.log('From Conversion:', this.fromconversion.currencySymbol);
      console.log('To Conversion:', this.toconversion.currencySymbol);
      console.log(res); // Imprime la respuesta en la consola
      // Resto del código...
  } catch (error) {
      console.error('Error en la conversión:', error);
      console.log('From Conversion:', this.fromconversion.currencySymbol);
      console.log('To Conversion:', this.toconversion.currencySymbol);

      // Puedes mostrar un mensaje de error al usuario si es necesario
  }
}
}

