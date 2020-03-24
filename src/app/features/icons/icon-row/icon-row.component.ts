import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ComponentFactoryResolver,
} from '@angular/core';

import { IconRowDirective } from './icon-row.directive';
import { IconItem } from './icon-item';
import { IconComponent } from './icon-item.model';

@Component({
  selector: 'app-icon-row',
  template: `
    <div class="c-icon-row__container">
      <ng-template icon-host></ng-template>
    </div>
  `,
  styleUrls: ['./icon-row.component.scss'],
})
export class IconRowComponent implements OnInit {
  @Input() icons: IconItem[];
  @ViewChild(IconRowDirective, { static: true }) iconHost: IconRowDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.loadComponents();
  }

  loadComponents(): void {
    this.icons.forEach((icon) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        icon.component,
      );

      const viewContainerRef = this.iconHost.viewContainerRef;

      const componentRef = viewContainerRef.createComponent(componentFactory);
      (componentRef.instance as IconComponent).data = icon.data;
    });
  }
}
