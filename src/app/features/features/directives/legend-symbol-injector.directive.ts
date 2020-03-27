import { Directive, ViewContainerRef } from '@angular/core';

// * Creates a injection point for the legends symbol
@Directive({
  selector: '[legend-symbol-host]',
})
export class LegendSymbolDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
