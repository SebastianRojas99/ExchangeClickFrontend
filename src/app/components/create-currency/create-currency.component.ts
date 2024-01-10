import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyService } from 'src/app/services/currency.service';
import { CurrencyForCreation } from 'src/app/interfaces/currency';
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
  @Input() currency:CurrencyForCreation = {
    currencyName: '',
    currencySymbol: '',
    currencyValue: 0,
    userId: 0
  };
  async onSubmit(){
    (this.currency.currencySymbol)?this.actualizarMoneda():this.agregarMoneda();
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
  async actualizarMoneda() {
    const res = await this.currencyService.update(this.currency);
    this.cerrarModal.emit();

    if (this.currency.currencySymbol && this.currency.currencySymbol.length > 0) {
      if (res) {
        generarMensajeExito('Moneda actualizada');
      } else {
        generarMensajeError('Moneda no actualizada');
      }
    } else {
      generarMensajeError('No existe moneda con el símbolo proporcionado');
    }
  }
  }


