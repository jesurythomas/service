import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../../shared/crud.service';
import { Student } from '../../shared/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
})
export class StudentAddComponent implements OnInit {
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

  constructor(private fb: FormBuilder, private crud: CrudService) {}

  ngOnInit(): void {}

  onSubmit() {
    const payload: Student = {
      $key: '',
      firstName: this.f.firstName.value,
      lastName: this.f.lastName.value,
      email: this.f.email.value,
      mobileNumber: this.f.mobileNumber.value,
    };

    this.crud.addStudent(payload);
    this.form.reset();
  }

  get f() {
    return this.form.controls;
  }
}
