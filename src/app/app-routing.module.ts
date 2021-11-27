import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./pages/view-message/view-message.module').then(m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'language',
    pathMatch: 'full'
  },
  {
    path: 'customer-profile',
    loadChildren: () => import('./pages/customer-profile/customer-profile.module').then(m => m.CustomerProfilePageModule)
  },
  {
    path: 'sale',
    loadChildren: () => import('./pages/sale/sale.module').then(m => m.SalePageModule)
  },

  {
    path: 'language',
    loadChildren: () => import('./pages/language/language.module').then(m => m.LanguagePageModule)
  },
  {
    path: 'worker',
    loadChildren: () => import('./pages/worker/worker.module').then(m => m.WorkerPageModule)
  },

  {
    path: 'customer-profile',
    loadChildren: () => import('./pages/customer-profile/customer-profile.module').then(m => m.CustomerProfilePageModule)
  },
  {
    path: 'sale',
    loadChildren: () => import('./pages/sale/sale.module').then(m => m.SalePageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'expense',
    loadChildren: () => import('./pages/expense/expense.module').then(m => m.ExpensePageModule)
  },
  {
    path: 'owner',
    loadChildren: () => import('./pages/owner/owner.module').then(m => m.OwnerPageModule)
  },

  {
    path: 'record-payment',
    loadChildren: () => import('./pages/record-payment/record-payment.module').then(m => m.RecordPaymentPageModule)
  },
  {
    path: 'list-payment',
    loadChildren: () => import('./pages/list-payment/list-payment.module').then(m => m.ListPaymentPageModule)
  },
  {
    path: 'list-expense',
    loadChildren: () => import('./pages/list-expense/list-expense.module').then(m => m.ListExpensePageModule)
  },
  {
    path: 'list-worker',
    loadChildren: () => import('./pages/list-worker/list-worker.module').then(m => m.ListWorkerPageModule)
  },
  {
    path: 'list-customer',
    loadChildren: () => import('./pages/list-customer/list-customer.module').then(m => m.ListCustomerPageModule)
  },
  {
    path: 'list-sale',
    loadChildren: () => import('./pages/list-sale/list-sale.module').then(m => m.ListSalePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
