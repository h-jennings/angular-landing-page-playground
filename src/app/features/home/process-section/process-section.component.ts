import { Component } from '@angular/core';
import { IProcessItem } from '../models/process-item-card.model';
import { processItems } from '../data/processItems';

@Component({
  selector: 'app-process-section',
  templateUrl: './process-section.component.html',
  styleUrls: ['./process-section.component.scss'],
})
export class ProcessSectionComponent {
  processItems: IProcessItem[] = processItems;
}
