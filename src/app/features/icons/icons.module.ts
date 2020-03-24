import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { IconsComponent } from './icons.component';

import { IconRowComponent } from './icon-row/icon-row.component';

import { IconRowDirective } from './icon-row/icon-row.directive';

import { IconService } from './icon-row/icon-row.service';

@NgModule({
  declarations: [IconsComponent, IconRowComponent, IconRowDirective],
  providers: [IconService],
  imports: [CommonModule, IconsRoutingModule],
})
export class IconsModule {}
