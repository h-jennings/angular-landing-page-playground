import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Custom Shared Components
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [RouterModule, CommonModule],
  exports: [
    // vendor
    CommonModule,
    RouterModule,

    // local/custom
    ButtonComponent,
  ],
})
export class SharedModule {}
