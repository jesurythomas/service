import { Component, Input, OnInit } from '@angular/core';
import { GroceriesService } from '../groceries.service';

@Component({
  selector: 'app-groceries-delete',
  templateUrl: './groceries-delete.component.html',
  styleUrls: ['./groceries-delete.component.css'],
})
export class GroceriesDeleteComponent implements OnInit {
  @Input() index: number;

  constructor(private groceries: GroceriesService) {}

  ngOnInit(): void {}

  onDelete(id: string) {
    const parsedNumber = parseInt(id);

    isNaN(parsedNumber)
      ? alert('Not a number')
      : this.groceries.removeGroceryItem(parsedNumber);
  }

  onReuseDelete() {
    this.groceries.removeGroceryItem(this.index);
  }
}
