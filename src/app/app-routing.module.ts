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
    path: 'lang',
    loadChildren: () => import('./lang/lang.module').then(m => m.LangPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then(m => m.LanguagePageModule)
  },  {
    path: 'town4',
    loadChildren: () => import('./town4/town4.module').then( m => m.Town4PageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
