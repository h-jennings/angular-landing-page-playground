import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroComponent } from './components/hero/hero.component';
import { ProcessSectionComponent } from './process-section/process-section.component';
import { ProcessItemCardComponent } from './process-item-card/process-item-card.component';
import { WhyUsSectionComponent } from './why-us-section/why-us-section.component';
import { BlockGridItemComponent } from './components/block-grid-item/block-grid-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ProcessSectionComponent,
    ProcessItemCardComponent,
    WhyUsSectionComponent,
    BlockGridItemComponent,
  ],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
