import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../../shared/student';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css'],
})
export class StudentCardComponent implements OnInit {
  @Input() students$: any;
  @Output() selectedStudent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onClick(i: number) {
    this.selectedStudent.emit(i);
  }
}
