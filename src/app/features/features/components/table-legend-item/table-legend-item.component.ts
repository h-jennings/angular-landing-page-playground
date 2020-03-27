import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-legend-item',
  template: `
    <div class="c-table-legend-item__container">
      <ng-container legend-symbol-host></ng-container>
      <div class="c-table-legend-item__container">
        {{ data.text }}
      </div>
    </div>
  `,
  styleUrls: ['./table-legend-item.component.scss'],
})
export class TableLegendItemComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {}
}
