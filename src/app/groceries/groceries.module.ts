import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceriesHomeComponent } from './groceries-home/groceries-home.component';
import { GroceriesRoutingModule } from './groceries-routing.module';
import { GroceriesService } from './groceries.service';
import { GroceriesAddComponent } from './groceries-add/groceries-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GroceriesListComponent } from './groceries-list/groceries-list.component';
import { GroceriesDeleteComponent } from './groceries-delete/groceries-delete.component';

@NgModule({
  declarations: [GroceriesHomeComponent, GroceriesAddComponent, GroceriesListComponent, GroceriesDeleteComponent],
  imports: [CommonModule, GroceriesRoutingModule, ReactiveFormsModule],
  providers: [GroceriesService],
})
export class GroceriesModule {}
