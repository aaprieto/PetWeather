import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpetComponent } from './listpet.component';

describe('ListpetComponent', () => {
  let component: ListpetComponent;
  let fixture: ComponentFixture<ListpetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
