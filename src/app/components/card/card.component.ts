import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() planType: string = '';

  @Input() planPrice: number = 0;

  @Input('style')
  cardStyle: 'orange' | 'purple' = 'orange';

  @Output('buttonClicked')
  buttonClickedEmitt = new EventEmitter<void>();

  onButonClicked() {
    this.buttonClickedEmitt.emit();
  }
}
