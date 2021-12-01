import { componentFactoryName } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { EMPTY, from, Observable, of } from 'rxjs';
import { Students } from 'src/data/_students';

import { CrudService } from './crud.service';

fdescribe('CrudService', () => {
  let service: CrudService;
  let afs: AngularFirestore;

  const data = from(Students.data);

  // const collectionStub = {
  //   valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data),
  // };

  // const angularFirestoreStub = {
  //   collection: jasmine
  //     .createSpy('valueChanges')
  //     .and.returnValue(collectionStub),
  // };

  const insideCollection = jasmine.createSpyObj('collection', [
    'doc',
    'valueChanges',
  ]);
  const insideDocs = jasmine.createSpyObj('doc', [
    'get',
    'update',
    'dete',
    'set',
  ]);

  const fakeAfs = jasmine.createSpyObj('AngularFirestore', ['collection']);
  fakeAfs.collection.and.returnValue(insideCollection);
  insideCollection.valueChanges.and.returnValue(data);
  insideCollection.doc.and.returnValue(insideDocs);
  insideDocs.get.and.returnValue(data);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: AngularFirestore, useValue: fakeAfs }],
    });

    afs = TestBed.inject(AngularFirestore);
    service = TestBed.inject(CrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(fakeAfs.collection).toHaveBeenCalledWith('students');
  });

  it('should get all students', (done: DoneFn) => {
    let data = [];
    service.getStudents().subscribe((value) => {
      data.push(value);
      done();
    });
    expect(data).toEqual(Students.data);
  });

  it('should get one student', (done: DoneFn) => {
    let spy = spyOn(service, 'getOneStudent').and.returnValue(EMPTY);
    service.getOneStudent('1').subscribe();

    expect(spy).toHaveBeenCalledWith('1');
  });
});
