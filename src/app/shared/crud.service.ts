import { Injectable } from '@angular/core';
import { Student } from '../shared/student';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable, pipe } from 'rxjs';
import { filter, find, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private studentsCollection: AngularFirestoreCollection<Student>;
  student$!: Observable<Student[]>;
  isLoggedIn = false;

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

  getOneStudentFromObservable(id: string) {
    return this.student$.pipe(
      map((x) => {
        {
          let fl = x.filter((x) => {
            return x.$key === id;
          });
          return fl.length > 0 ? fl[0] : null;
        }
      })
    );
  }

  modifyStudent(studentId: string, studentChanges: Student) {
    this.studentsCollection.doc(studentId).update(studentChanges);
  }
  removeStudent(studentId: string) {
    this.studentsCollection.doc(studentId).delete();
  }

  getOneStudent(id: string) {
    return this.studentsCollection.doc(id).get();
  }
}
