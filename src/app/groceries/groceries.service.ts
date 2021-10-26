import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
class GroceryItems {
  item: string;
  qty: number;
  price: number;
}
export class GroceriesService {
  groceryList: GroceryItems[] = [
    {
      item: 'Apple',
      qty: 10,
      price: 15,
    },
    {
      item: 'Bananas',
      qty: 6,
      price: 10,
    },
    {
      item: 'Watermelon',
      qty: 5,
      price: 20,
    },
    {
      item: 'Grapes',
      qty: 13,
      price: 40,
    },
    {
      item: 'Lychee',
      qty: 5,
      price: 10,
    },
  ];

  constructor() {}

  getGroceries() {
    return this.groceryList;
  }

  addGroceryItem(item: GroceryItems) {
    const currentList = [...this.groceryList];
    const itemAdded = [...currentList, item];
    this.groceryList = [...itemAdded];
  }

  removeGroceryItem(index: number) {
    console.log(this.groceryList.length);
    console.log(this.groceryList);
    if (index > this.groceryList.length - 1 || index < 0)
      alert('Index not found');
    else {
      this.groceryList.splice(index, 1);
    }
  }
}
