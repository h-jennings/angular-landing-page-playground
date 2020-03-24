import { Component, OnInit } from '@angular/core';

import { IconService } from './icon-row/icon-row.service';
import { IconItem } from './icon-row/icon-item';

@Component({
  selector: 'app-icons',
  template: `
    <div>
      <app-icon-row [icons]="icons"></app-icon-row>
    </div>
  `,
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit {
  icons: IconItem[];
  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    this.icons = this.iconService.getIcons();
  }
}
