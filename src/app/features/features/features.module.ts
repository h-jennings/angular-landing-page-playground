import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { TableLegendComponent } from './components/table-legend/table-legend.component';
import { TableLegendItemComponent } from './components/table-legend-item/table-legend-item.component';
import { LegendSymbolDirective } from './directives/legend-symbol-injector.directive';
import { BasicLegendService } from './services/basic-legend.service';

@NgModule({
  declarations: [
    FeaturesComponent,
    TableLegendComponent,
    TableLegendItemComponent,
    LegendSymbolDirective,
  ],
  imports: [CommonModule, FeaturesRoutingModule, SharedModule],
  providers: [BasicLegendService],
})
export class FeaturesModule {}
