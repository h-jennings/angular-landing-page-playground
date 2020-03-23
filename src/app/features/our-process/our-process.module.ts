import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurProcessRoutingModule } from './our-process-routing.module';
import { OurProcessComponent } from './our-process.component';

@NgModule({
  declarations: [OurProcessComponent],
  imports: [CommonModule, OurProcessRoutingModule],
})
export class OurProcessModule {}
