import {
  Injectable,
  ComponentRef,
  ComponentFactoryResolver,
  Injector,
} from '@angular/core';
import { FeaturesModule } from '../features.module';
import { TableLegendComponent } from '../components/table-legend/table-legend.component';

@Injectable({
  providedIn: FeaturesModule,
})
export class BasicLegendService {
  // Creating a property with a ref to the table legend component
  legendComponentRef: ComponentRef<TableLegendComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
  ) {}

  getLegendItems() {
    return [];
  }
}
