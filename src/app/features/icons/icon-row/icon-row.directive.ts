import { Directive, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[icon-host]' })
export class IconRowDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
