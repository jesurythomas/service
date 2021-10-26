import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GroceriesService } from '../groceries.service';

@Component({
  selector: 'app-groceries-add',
  templateUrl: './groceries-add.component.html',
  styleUrls: ['./groceries-add.component.css'],
})
export class GroceriesAddComponent implements OnInit {
  @Output() submitted = new EventEmitter<boolean>();

  form = this.fb.group({
    item: ['', Validators.required],
    qty: ['', Validators.required],
    price: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private groceries: GroceriesService) {}

  ngOnInit(): void {}

  onSubmit() {
    const payload = {
      item: this.f.item.value,
      qty: this.f.qty.value,
      price: this.f.price.value,
    };

    this.groceries.addGroceryItem(payload);
    this.form.reset();
    this.submitted.emit(true);
  }

  get f() {
    return this.form.controls;
  }
}
