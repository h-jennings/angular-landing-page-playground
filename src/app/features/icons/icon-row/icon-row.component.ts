import {
  Component,
  Input,
  ViewChild,
  ComponentFactoryResolver,
} from '@angular/core';

import { IconRowDirective } from './icon-row.directive';
import { IconItem } from './icon-item';
import { IconComponent } from './icon-component.model';

@Component({
  selector: 'app-icon-row',
  template: `
    <div class="c-icon-row__container">
      <ng-container *ngFor="let iconItem of icons">
        {{ loadComponent(iconItem.iconItem) }}
        <ng-template icon-host></ng-template>
        <p>{{ iconItem.iconItem.text }}</p>
      </ng-container>
    </div>
  `,
  styleUrls: ['./icon-row.component.scss'],
})
export class IconRowComponent {
  @Input() icons: IconItem[];
  @ViewChild(IconRowDirective, { static: true }) iconHost: IconRowDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  // ngOnInit(): void {
  //   this.loadComponents();
  // }

  loadComponent(icon: IconItem): void {
    debugger;
    // this.icons.forEach((icon) => {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      icon.iconItem.symbol.component,
    );

    const viewContainerRef = this.iconHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as IconComponent).data = icon.iconItem.symbol.data;
    // });
  }
}
