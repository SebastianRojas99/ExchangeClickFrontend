import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyDetailComponent } from './currency-detail.component';

const routes: Routes = [
  {
    path:'',
    component: CurrencyDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyDetailRoutingModule { }
