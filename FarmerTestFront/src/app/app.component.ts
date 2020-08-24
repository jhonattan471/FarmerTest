import { Component } from '@angular/core';
import { myFarmerSearchProvider } from './provider/Farmer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public myFarmerSearchProvider: myFarmerSearchProvider) { }

  mySelectedFarmer(event) {

  }
}
