import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { usuariologGuard } from './guards/usuariolog';
import { usuarionologGuard } from './guards/usuarionolog';
import { isAdminGuard } from './guards/isadminguard';


const routes: Routes = [
  {
    path:'login',
    canActivate:[usuarionologGuard],
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path:'register',
    canActivate:[usuarionologGuard],
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'conversor',
    canActivate:[usuariologGuard],
    loadChildren: () => import('./pages/conversor/conversor.module').then(m => m.ConversorModule)
  },
  {
    path:'profile/:userId',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path:'users',
    canActivate:[isAdminGuard],
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
  },
  {
    path:'users/:userId',
    loadChildren: () => import('./pages/user-detail/user-detail.module').then(m => m.UserDetailModule)
  },
  {
    path:'currencies',
    canActivate:[usuariologGuard],
    loadChildren: () => import('./pages/currencies/currencies.module').then(m => m.CurrenciesModule)
  },
  {
    path:'currencies/:currencyId',
    loadChildren: () => import('./pages/currency-detail/currency-detail.module').then(m => m.CurrencyDetailModule)
  },
  {
    path:'',// path vacio porque es la ruta principal
    redirectTo:'conversor',//se usa para redireccionar al conversor
    pathMatch:'full', // indica que la ruta debe ser exactamente igual a la que se indica en el path
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
