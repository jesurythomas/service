import { Component, Input, OnInit, Output } from '@angular/core';
import { CrudService } from '../../shared/crud.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css'],
})
export class StudentDeleteComponent implements OnInit {
  @Input() studentId: string;
  @Output() deleted: boolean;

  constructor(private crud: CrudService) {}

  ngOnInit(): void {}

  onDelete(id: string) {
    this.crud.removeStudent(id);
  }

  onReuseDelete() {
    this.crud.removeStudent(this.studentId);
  }
}
