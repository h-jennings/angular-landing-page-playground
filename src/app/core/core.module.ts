import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NavigationComponent } from './layout/main-layout/navigation/navigation.component';
import { FooterComponent } from './layout/main-layout/footer/footer.component';

@NgModule({
  declarations: [MainLayoutComponent, NavigationComponent, FooterComponent],
  imports: [BrowserModule, RouterModule],
  exports: [MainLayoutComponent],
})
export class CoreModule {}
