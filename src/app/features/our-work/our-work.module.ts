import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurWorkRoutingModule } from './our-work-routing.module';
import { OurWorkComponent } from './our-work.component';

@NgModule({
  declarations: [OurWorkComponent],
  imports: [CommonModule, OurWorkRoutingModule],
})
export class OurWorkModule {}
