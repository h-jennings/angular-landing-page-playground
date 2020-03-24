import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Custom Shared Components
import { ButtonComponent } from './button/button.component';
import { StatusCircleComponent } from './icons/status-circle/status-circle.component';
import { StatusSquareComponent } from './icons/status-square/status-square.component';

@NgModule({
  declarations: [ButtonComponent, StatusCircleComponent, StatusSquareComponent],
  imports: [RouterModule, CommonModule],
  exports: [
    // vendor
    CommonModule,
    RouterModule,

    // local/custom
    ButtonComponent,
  ],
  entryComponents: [StatusCircleComponent, StatusSquareComponent],
})
export class SharedModule {}
