import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileIconComponent } from "./components/profile-icon/profile-icon.component";
import { CreateCurrencyComponent } from './components/create-currency/create-currency.component';
import { CurrencyDetailComponent } from './pages/currency-detail/currency-detail.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { CreateUserComponent } from "./components/create-user/create-user.component";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ProfileComponent,
        CurrencyDetailComponent,
        UserDetailComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ExchangeComponent,
        ProfileIconComponent,
        CreateCurrencyComponent,
        CreateUserComponent
    ]
})
export class AppModule { }
