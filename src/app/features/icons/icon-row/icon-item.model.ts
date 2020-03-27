import { Type } from '@angular/core';

export interface IconItemSymbolInterface {
  component: Type<any>;
  data: any;
}

export interface IconItemInterface {
  text: string;
  symbol: IconItemSymbolInterface;
}
