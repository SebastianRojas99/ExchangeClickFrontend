import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Currency } from 'src/app/interfaces/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent {
  currencyService = inject(CurrencyService);
  currencies: Currency[] = [];
  ngOnInit(): void {
    this.currencyService.getAll().then(res => {
      this.currencies = res;
      console.log("Lista de monedas:", res);
    });
  }
}
