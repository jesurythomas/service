import { Component, OnChanges, OnInit } from '@angular/core';
import { GroceriesService } from '../groceries.service';

@Component({
  selector: 'app-groceries-home',
  templateUrl: './groceries-home.component.html',
  styleUrls: ['./groceries-home.component.css'],
})
export class GroceriesHomeComponent implements OnInit {
  groceryList: any = [];
  dataLoaded = false;
  constructor(private groceries: GroceriesService) {}

  ngOnInit(): void {
    this.groceryList = this.groceries.getGroceries();
    this.dataLoaded = true;
  }

  getGroceries() {
    this.groceryList = this.groceries.getGroceries();
  }

  updateList() {
    this.getGroceries();
  }
}
