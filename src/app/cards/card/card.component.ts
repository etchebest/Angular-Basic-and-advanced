import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CardComponent {
  public planos = [
    { label: 'Simples', preco: 'R$100,00/Mês', tipo: 'Simples' },
    { label: 'Intermediário', preco: 'R$200,00/Mês', tipo: 'Intermediario' },
    { label: 'Avançado', preco: 'R$300,00/Mês', tipo: 'Avancado' },
  ];
}
