import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FarmerSearchAbstractProvider } from "../provider/Farmer";
import { Farmer } from '../model/Farmer';

@Component({
  selector: 'farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.scss']
})
export class FarmerSerachComponent {
  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;
  @Input() placeholder_name:string = "Destinatário";
  @Output() onFarmerSelectedEvent = new EventEmitter<Farmer>();
  
  currentFarmer: Farmer;
  searchField: string;
  search() {

    this.farmerSearchAbstractProvider.searchFarmers({ searchParam: this.searchField })
      .then(r => {
        //console.log(r);
        this.clear();
        if (r.length > 0) {
          this.currentFarmer = r[0];
          this.onFarmerSelectedEvent.emit(r[0]);
        } else {
          alert("Nenhum resultado encontrado.");
        }
      })
      .catch(e => {
        alert("Ops, algo deu errado : " + e.message || "");
        console.log(e);
      })
  }

  clear() {
    this.currentFarmer = null;
  }

}
