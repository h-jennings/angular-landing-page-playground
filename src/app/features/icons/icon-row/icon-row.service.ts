import { Injectable } from '@angular/core';

import { StatusCircleComponent } from '../../../shared/icons/status-circle/status-circle.component';
import { StatusSquareComponent } from '../../../shared/icons/status-square/status-square.component';
import { IconItem } from './icon-item';

@Injectable()
export class IconService {
  getIcons() {
    return [
      new IconItem({
        text: 'Test',
        symbol: {
          component: StatusCircleComponent,
          data: {
            fill: 'blue',
          },
        },
      }),
    ];
  }
}
