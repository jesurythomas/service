import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-groceries-list',
  templateUrl: './groceries-list.component.html',
  styleUrls: ['./groceries-list.component.css'],
})
export class GroceriesListComponent implements OnInit {
  @Input() groceries: any;
  @Output() selectedStudent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onClick(i: number) {
    this.selectedStudent.emit(i);
  }
}
