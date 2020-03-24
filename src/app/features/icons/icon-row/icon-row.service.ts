import { Injectable } from '@angular/core';

import { StatusCircleComponent } from '../../../shared/icons/status-circle/status-circle.component';
import { StatusSquareComponent } from '../../../shared/icons/status-square/status-square.component';
import { IconItem } from './icon-item';

@Injectable()
export class IconService {
  getIcons() {
    return [
      new IconItem(StatusCircleComponent, {
        fill: 'blue',
      }),
      new IconItem(StatusSquareComponent, {
        fill: 'red',
      }),
      new IconItem(StatusCircleComponent, {
        fill: 'green',
      }),
    ];
  }
}
