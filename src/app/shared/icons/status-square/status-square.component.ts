import { Component, Input } from '@angular/core';
import { IconComponent } from 'src/app/features/icons/icon-row/icon-item.model';

@Component({
  selector: 'status-square',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <path
        d="M0 0h100v100H0z"
        fill="#4946BB"
        [ngStyle]="{
          fill: data.fill
        }"
        fill-rule="evenodd"
      />
    </svg>
  `,
})
export class StatusSquareComponent implements IconComponent {
  @Input() data: any;
}
