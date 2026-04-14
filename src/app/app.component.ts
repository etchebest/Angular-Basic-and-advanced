import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  clickedButton(){
    console.log('====================================');
    console.log("Botão clicado");
    console.log('====================================');
  }
}
