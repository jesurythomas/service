import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesAddComponent } from './groceries-add.component';

describe('GroceriesAddComponent', () => {
  let component: GroceriesAddComponent;
  let fixture: ComponentFixture<GroceriesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroceriesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceriesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
