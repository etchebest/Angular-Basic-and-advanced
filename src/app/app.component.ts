import { Component } from '@angular/core';

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
export class AppComponent {
  // name: string = 'Felipe';

  personSelectedIndex: number | undefined;
  listPeople = [
    { name: 'Felipe Freitas', age: 26 },
    { name: 'Fulano da Silva', age: 34 },
    { name: 'Jorginho Carvalho', age: 55 },
    { name: 'Joãozinho da Silva', age: 18 },
  ];

  selectPerson(index: number) {
    this.personSelectedIndex = index;
  }
}
