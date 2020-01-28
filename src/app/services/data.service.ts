import { Injectable } from "@angular/core";
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class DataService {
  public items: any = [];

  constructor() {
    this.items = [
      { 
        title: '1',
        index: '0001',
        name:  'The God of Abraham praise!',
        url:    ''
      },
      { 
        title: '2',
        index: '0002',
        name:  'Thou whose almihty word',
        
      },
      { 
        title: '3',
        index: '0004',
        name:  'The God of Abraham praise!'
      },
      { 
        title: '4',
        index: '0004',
        name:  'Glory to God on high'
      },
      { 
        title: '5',
        index: '0005',
        name:  'Grace tis a charming sound'
      },
      
    ];
  }

  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}