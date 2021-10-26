import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentRoutingModule } from './student-routing.module';

@NgModule({
  declarations: [
    StudentCardComponent,
    StudentEditComponent,
    StudentAddComponent,
    StudentDeleteComponent,
    StudentHomeComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, StudentRoutingModule],
  exports: [],
})
export class StudentModule {}
