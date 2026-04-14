import { Component, OnInit } from '@angular/core';

export interface ICards {
  id: number;
  planType: string;
  planPrice: number;
  style: 'orange' | 'purple';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public cards: ICards[] = [];

  ngOnInit(): void {
    this.cards = [
      {
        id: 1,
        planType: 'Básico',
        planPrice: 100,
        style: 'orange',
      },
      {
        id: 2,
        planType: 'Intermediário',
        planPrice: 200,
        style: 'purple',
      },
      {
        id: 3,
        planType: 'Avançado',
        planPrice: 300,
        style: 'purple',
      },
    ];
  }

  clickedButton() {
    console.log('====================================');
    console.log('Botão clicado');
    console.log('====================================');
  }
}
