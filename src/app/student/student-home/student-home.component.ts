import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/compat';
import { map } from 'rxjs/operators';
import { CrudService } from 'src/app/shared/crud.service';
import { Student } from 'src/app/shared/student';
import * as bcrypt from 'bcryptjs';

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
  test: any;
  data: Student;
  loggedUser: any;

  constructor(
    private fb: FormBuilder,
    private crud: CrudService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.crud.getStudents().subscribe((val) => {
      this.students$ = val;
    });

    // this.loggedUser = JSON.parse(localStorage.getItem('loginInformation'));
    // console.log(this.loggedUser);
    // console.log(this.loggedUser['password']);
    // console.log(JSON.parse(localStorage.getItem('sampleVariable')));
    // localStorage.removeItem('loginInformation');
  }

  onEdit(index: any) {
    this.editing = true;
    this.editingIndex = index;
  }

  editComplete(value: any) {
    this.editing = value;
    this.editingIndex = null;
  }

  onSearch(id: string) {
    this.crud.getOneStudent(id).subscribe((v) => {
      this.test = v.data();
    });
  }

  testFunction() {
    // let x = 'OJVhqGc3Jhwtl8t2hUYv';
    // this.crud.getOneStudentFromObservable(x).subscribe((x) => (this.data = x));
    // console.log(this.data);

    const password = 'testPassword';
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    console.log(password);
    console.log(hash);

    console.log(bcrypt.compareSync('testPassword', hash));
    console.log(bcrypt.compareSync('123', hash));
  }

  get f() {
    return this.form.controls;
  }
}
