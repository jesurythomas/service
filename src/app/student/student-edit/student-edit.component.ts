import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../shared/crud.service';
import { Student } from '../../shared/student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
})
export class StudentEditComponent implements OnInit, OnChanges {
  @Output() editStatus = new EventEmitter<boolean>();
  @Input() student: Student;
  editForm: FormGroup;

  constructor(private fb: FormBuilder, private crud: CrudService) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      $key: [this.student.$key],
      firstName: [this.student.firstName, Validators.required],
      lastName: [this.student.lastName, Validators.required],
      email: [
        this.student.email,
        {
          validators: [Validators.required, Validators.email],
        },
      ],
      mobileNumber: [this.student.mobileNumber, Validators.required],
    });
  }

  ngOnChanges(): void {
    this.editForm = this.fb.group({
      $key: [this.student.$key],
      firstName: [this.student.firstName, Validators.required],
      lastName: [this.student.lastName, Validators.required],
      email: [
        this.student.email,
        {
          validators: [Validators.required, Validators.email],
        },
      ],
      mobileNumber: [this.student.mobileNumber, Validators.required],
    });
  }

  onSubmit() {
    const payload: Student = {
      $key: this.student.$key,
      firstName: this.f.firstName.value,
      lastName: this.f.lastName.value,
      email: this.f.email.value,
      mobileNumber: this.f.mobileNumber.value,
    };

    this.crud.modifyStudent(this.student.$key, payload);
    this.editStatus.emit(false);
  }

  stopEditing() {
    this.editStatus.emit(false);
  }

  get f() {
    return this.editForm.controls;
  }
}
