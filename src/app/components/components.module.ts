import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [ButtonComponent, ButtonComponent, CardComponent],
  imports: [CommonModule],
  exports: [CardComponent],
})
export class ComponentsModule {}
