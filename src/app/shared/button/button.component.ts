import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  ViewEncapsulation,
  Input,
  OnInit,
} from '@angular/core';

const BUTTON_STYLE_VARIANTS = ['primary-dark', 'primary-light'];

// TODO: Create an enumerable state value input for idle and disabled

@Component({
  selector: `button[primary]`,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
  constructor(public elemRef: ElementRef) {
    // Adds a universal base class to all buttons
    elemRef.nativeElement.classList.add('button-base');
  }
  @Input()
  text: string;

  @Input()
  get styleVariant(): string {
    return this._styleVariant;
  }
  set styleVariant(variant: string) {
    variant !== undefined
      ? (this._styleVariant = variant)
      : (this._styleVariant = 'primary-dark');
  }
  private _styleVariant: string;

  _getHostElement() {
    return this.elemRef.nativeElement;
  }

  _hasStyleVariants(...variants: string[]) {
    return variants.some((variant) => this._styleVariant === variant);
  }

  ngOnInit() {
    // Set default variant if no input is provided
    if (!this._styleVariant) {
      this._styleVariant = 'primary-dark';
    }

    // Apply the class for the style variant provided
    for (const style of BUTTON_STYLE_VARIANTS) {
      if (this._hasStyleVariants(style)) {
        (this._getHostElement() as HTMLElement).classList.add(style);
      }
    }
  }
}
