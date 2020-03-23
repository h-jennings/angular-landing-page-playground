import { Component, Input, OnInit } from '@angular/core';
import { IProcessItem } from '../models/process-item-card.model';
import { EDefaultCardValues } from '../enums/process-item-card.enum';

@Component({
  selector: 'app-process-item-card',
  templateUrl: './process-item-card.component.html',
  styleUrls: ['./process-item-card.component.scss'],
})
export class ProcessItemCardComponent implements OnInit {
  private _cardData: IProcessItem;

  @Input()
  set cardData(cardData: IProcessItem) {
    this._cardData = this.cleanData(cardData);
  }

  get cardData(): IProcessItem {
    return this._cardData;
  }

  cleanData(obj: IProcessItem): IProcessItem {
    const svgSrc = obj.svgSrc || EDefaultCardValues.svgSrcDefault;
    const title = obj.title || EDefaultCardValues.titleDefault;
    const body = obj.body || EDefaultCardValues.bodyDefault;

    return {
      svgSrc,
      title,
      body,
    };
  }

  // If no props given return default object
  ngOnInit(): IProcessItem {
    if (!this._cardData) {
      return (this._cardData = {
        svgSrc: EDefaultCardValues.svgSrcDefault,
        title: EDefaultCardValues.titleDefault,
        body: EDefaultCardValues.bodyDefault,
      });
    }
  }
}
