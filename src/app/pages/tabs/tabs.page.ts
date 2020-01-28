import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})

export class TabsPage implements OnInit {
  public searchTerm: string = "";
  public items: any;

  public isSearchbarOpened = false;
  constructor() { }

  ngOnInit() {
    this.setFilteredItems();
  
  }

  setFilteredItems() {
    //this.items = this.dataService.filterItems(this.searchTerm);
  }
  tab2selected() {
    console.log('I am Selected');
  }

}
