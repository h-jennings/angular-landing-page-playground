import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-grid-item',
  templateUrl: './block-grid-item.component.html',
  styleUrls: ['./block-grid-item.component.scss'],
})
export class BlockGridItemComponent {
  private _imgSrc: string;

  @Input()
  set imgSrc(src: string) {
    const imgSrc = src || 'https://via.placeholder.com/40x40';
    this._imgSrc = imgSrc;
  }

  get imgSrc(): string {
    return this._imgSrc;
  }

  private _textContent: string;

  @Input()
  set textContent(text: string) {
    const textContent = text || 'This is some placeholder text.';
    this._textContent = textContent;
  }
  get textContent(): string {
    return this._textContent;
  }
  // If no props given return default object
  ngOnInit() {
    if (!this._imgSrc || !this._textContent) {
      this._imgSrc = 'https://via.placeholder.com/40x40';
      this._textContent = 'This is some placeholder text.';
    }
  }
}
