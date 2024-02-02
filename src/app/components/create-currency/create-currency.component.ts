import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyService } from 'src/app/services/currency.service';
import { Currency } from 'src/app/interfaces/currency';
import { generarMensajeExito, generarMensajeError } from 'src/app/helpers/message';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-currency',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create-currency.component.html',
  styleUrls: ['./create-currency.component.scss']
})
export class CreateCurrencyComponent {

  currencyService = inject(CurrencyService);
  @Output() cerrarModal = new EventEmitter();
  @Input() currency:Currency = {
    currencyId: 0,
    currencyName: '',
    currencySymbol: '',
    currencyValue: 0,
  };
  async onSubmit(){
    (this.currency.currencyId)?this.actualizarMoneda():this.agregarMoneda();
  }
  async actualizarMoneda() {
    const res = await this.currencyService.update(this.currency);
    this.cerrarModal.emit();
    if(res){
      generarMensajeExito('Moneda editada')
    }else{
      this.cerrarModal.emit();
      generarMensajeError('Moneda no editada')
    }
  }
  async agregarMoneda() {
    const res = await this.currencyService.create(this.currency);
    this.cerrarModal.emit();
    if(res){
      generarMensajeExito('Moneda agregada')
    }else{
      generarMensajeError('Moneda no agregada')
    }
  }
  }


