import { Routes } from '@angular/router';
import { JipconfigPageComponent } from './jipconfig-page/jipconfig-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProductsPageComponent } from './products-page/products-page.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'products/jipconfig', component: JipconfigPageComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
];
