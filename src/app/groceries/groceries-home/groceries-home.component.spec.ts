import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesHomeComponent } from './groceries-home.component';

describe('GroceriesHomeComponent', () => {
  let component: GroceriesHomeComponent;
  let fixture: ComponentFixture<GroceriesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroceriesHomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceriesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
