import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'our-work',
    loadChildren: () =>
      import('./features/our-work/our-work.module').then(
        (m) => m.OurWorkModule,
      ),
  },
  {
    path: 'our-process',
    loadChildren: () =>
      import('./features/our-process/our-process.module').then(
        (m) => m.OurProcessModule,
      ),
  },
  {
    path: 'features',
    loadChildren: () =>
      import('./features/features/features.module').then(
        (m) => m.FeaturesModule,
      ),
  },
  {
    path: 'pricing',
    loadChildren: () =>
      import('./features/pricing/pricing.module').then((m) => m.PricingModule),
  },
  {
    path: 'icons',
    loadChildren: () =>
      import('./features/icons/icons.module').then((m) => m.IconsModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
