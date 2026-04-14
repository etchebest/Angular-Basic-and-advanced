import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input('text') buttonText: string = '';
  @Input('style') buttonStyle: 'white' | 'purple' = 'white';
  @Input('disabled')
  isDisabled: boolean = false;

  @Output('clicked')
  buttonCLickEmitt = new EventEmitter<void>();

  onButtonClicled() {
    this.buttonCLickEmitt.emit();
  }
}
