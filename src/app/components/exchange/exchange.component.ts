import { Component, EventEmitter, Inject, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {  FromConversion, ToConversion } from 'src/app/interfaces/currency';
import { ConversionService } from 'src/app/services/conversion.service';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from 'src/app/services/currency.service';
import { generarMensajeError } from 'src/app/helpers/message';

@Component({
  selector: 'app-exchange',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})

export class ExchangeComponent implements OnInit {
  @Input() quantity: number = 0;
  @Input() fromconversion!: string;
  @Input() toconversion!: string;
  conversionresult: number = 0;
  fromConversions: FromConversion[] = [];
  toConversions: ToConversion[] = [];

  constructor(
    private currencyService: CurrencyService,
    private conversionService: ConversionService
  ) {}

  async ngOnInit() {
    this.fromConversions = await this.conversionService.getAllFrom();
    this.toConversions = await this.conversionService.getAllTo();
    
    if (this.fromConversions.length > 0) {
      this.fromconversion = this.fromConversions[0].currencySymbol;
    }
    if (this.toConversions.length > 0) {
      this.toconversion = this.toConversions[0].currencySymbol;
    }
  }

  async exchange() {
    try {
      const fromConversion = this.fromConversions.find(conversion => conversion.currencySymbol === this.fromconversion);
      const toConversion = this.toConversions.find(conversion => conversion.currencySymbol === this.toconversion);
      if (!fromConversion || !toConversion) {
        throw new Error('No se encuentra moneda');
      }
      const res = await this.conversionService.conversion(
        fromConversion,
        toConversion,
        this.quantity
      );
      this.conversionresult = Number(res.conversionRate);
    } catch (error) {

      generarMensajeError('TE QUEDASTE SIN INTENTOS, ACTUALIZA TU SUSCRIPCION PARA SEGUIR USANDO EL CONVERSOR DE MONEDAS');
    }
  }

  async swap() {
    const tempSymbol = this.fromconversion;
    this.fromconversion = this.toconversion;
    this.toconversion = tempSymbol;
  }
}
