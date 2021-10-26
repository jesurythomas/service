import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesDeleteComponent } from './groceries-delete.component';

describe('GroceriesDeleteComponent', () => {
  let component: GroceriesDeleteComponent;
  let fixture: ComponentFixture<GroceriesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroceriesDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceriesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
