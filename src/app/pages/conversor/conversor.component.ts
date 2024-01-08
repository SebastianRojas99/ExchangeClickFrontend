import { Component, OnInit, HostListener, inject, Input } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { Currency } from 'src/app/interfaces/currency';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit {

  currencyService = inject(CurrencyService);
  currencies: Currency[] = [];
  textoAModoMobile = '';

  isMobileResolution(): boolean {
    return window.innerWidth <= 768;
  }

  ngOnInit(): void {
    this.currencyService.getAll().then(res => {
      this.currencies = res;
      console.log("Lista de monedas:", res);
    });
  }

  @HostListener('window:resize')
  onResize() {
    if (!this.isMobileResolution()) {
      this.textoAModoMobile = '';
    }
  }
}
