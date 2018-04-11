import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpetComponent } from './viewpet.component';

describe('ViewpetComponent', () => {
  let component: ViewpetComponent;
  let fixture: ComponentFixture<ViewpetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
