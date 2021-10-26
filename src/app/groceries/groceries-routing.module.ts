import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceriesHomeComponent } from './groceries-home/groceries-home.component';

const routes: Routes = [
  {
    path: '',
    component: GroceriesHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroceriesRoutingModule {}
