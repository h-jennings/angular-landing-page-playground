import { Component, Input } from '@angular/core';
import { IconComponent } from 'src/app/features/icons/icon-row/icon-component.model';

@Component({
  selector: 'status-circle',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="50"
        fill="#4946BB"
        [ngStyle]="{
          fill: data.fill
        }"
        fill-rule="evenodd"
      />
    </svg>
  `,
})
export class StatusCircleComponent implements IconComponent {
  @Input() data: any;
}
