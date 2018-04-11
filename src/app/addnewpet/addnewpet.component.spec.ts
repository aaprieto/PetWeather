import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewpetComponent } from './addnewpet.component';

describe('AddnewpetComponent', () => {
  let component: AddnewpetComponent;
  let fixture: ComponentFixture<AddnewpetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewpetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
