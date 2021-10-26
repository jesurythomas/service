import { Injectable } from '@angular/core';
import { Student } from '../shared/student';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private studentsCollection: AngularFirestoreCollection<Student>;
  student$!: Observable<Student[]>;

  constructor(private afs: AngularFirestore) {
    this.studentsCollection = this.afs.collection<Student>('students');
    this.student$ = this.studentsCollection.valueChanges();
  }

  addStudent(student: Student) {
    const pushkey = this.afs.createId();
    student.$key = pushkey;
    this.studentsCollection.doc(pushkey).set(student);
  }

  getStudents() {
    return this.student$;
  }

  modifyStudent(studentId: string, studentChanges: Student) {
    this.studentsCollection.doc(studentId).update(studentChanges);
  }
  removeStudent(studentId: string) {
    this.studentsCollection.doc(studentId).delete();
  }
}
