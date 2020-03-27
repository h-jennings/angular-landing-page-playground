import {
  Component,
  ViewChild,
  ComponentRef,
  Type,
  ComponentFactoryResolver,
  ChangeDetectorRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { LegendSymbolDirective } from '../../directives/legend-symbol-injector.directive';

@Component({
  selector: 'app-table-legend',
  templateUrl: './table-legend.component.html',
  styleUrls: ['./table-legend.component.scss'],
})
export class TableLegendComponent implements AfterViewInit, OnDestroy {
  // Represents a component created by a component factory
  public componentRef: ComponentRef<any>;

  public childComponentType: Type<any>;

  @ViewChild(LegendSymbolDirective)
  insertionPoint: LegendSymbolDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
  ) {}

  // Once the component loads, then load the child component
  ngAfterViewInit() {
    // Loading the child component here
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  // When the table legend is destroyed, also destroy the
  // generated child component
  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  loadChildComponent(componentType: Type<any>): void {
    // Creates a component of a given type
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentType,
    );
    // Grabs the DOM element with the directive attribute
    let viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();
    // Injects the component into that DOM element
    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
