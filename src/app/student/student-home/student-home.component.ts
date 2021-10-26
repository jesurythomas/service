import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css'],
})
export class StudentHomeComponent implements OnInit {
  form = this.fb.group({
    $key: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: [
      '',
      {
        validators: [Validators.required, Validators.email],
      },
    ],
    mobileNumber: ['', Validators.required],
  });

  students$ = [];
  editing = false;
  editingIndex!: number;

  constructor(private fb: FormBuilder, private crud: CrudService) {}

  ngOnInit(): void {
    this.crud.getStudents().subscribe((val) => {
      this.students$ = val;
    });
  }

  onEdit(index: any) {
    this.editing = true;
    this.editingIndex = index;
  }

  editComplete(value: any) {
    this.editing = value;
    this.editingIndex = null;
  }

  get f() {
    return this.form.controls;
  }
}
