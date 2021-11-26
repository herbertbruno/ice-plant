import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then(m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'language',
    pathMatch: 'full'
  },
  {
    path: 'customer-profile',
    loadChildren: () => import('./customer-profile/customer-profile.module').then(m => m.CustomerProfilePageModule)
  },
  {
    path: 'sale',
    loadChildren: () => import('./sale/sale.module').then(m => m.SalePageModule)
  },

  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then(m => m.LanguagePageModule)
  },
  {
    path: 'worker',
    loadChildren: () => import('./worker/worker.module').then(m => m.WorkerPageModule)
  },

  {
    path: 'customer-profile',
    loadChildren: () => import('./customer-profile/customer-profile.module').then(m => m.CustomerProfilePageModule)
  },
  {
    path: 'sale',
    loadChildren: () => import('./sale/sale.module').then(m => m.SalePageModule)
  },
  {
    path: 'lang',
    loadChildren: () => import('./lang/lang.module').then(m => m.LangPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'expense',
    loadChildren: () => import('./expense/expense.module').then(m => m.ExpensePageModule)
  },
  {
    path: 'owner',
    loadChildren: () => import('./owner/owner.module').then(m => m.OwnerPageModule)
  },

  {
    path: 'record-payment',
    loadChildren: () => import('./record-payment/record-payment.module').then(m => m.RecordPaymentPageModule)
  },
  {
    path: 'list-payment',
    loadChildren: () => import('./list-payment/list-payment.module').then(m => m.ListPaymentPageModule)
  },
  {
    path: 'list-expense',
    loadChildren: () => import('./list-expense/list-expense.module').then(m => m.ListExpensePageModule)
  },
  {
    path: 'list-worker',
    loadChildren: () => import('./list-worker/list-worker.module').then(m => m.ListWorkerPageModule)
  },
  {
    path: 'list-customer',
    loadChildren: () => import('./list-customer/list-customer.module').then(m => m.ListCustomerPageModule)
  },
  {
    path: 'list-sale',
    loadChildren: () => import('./list-sale/list-sale.module').then( m => m.ListSalePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
