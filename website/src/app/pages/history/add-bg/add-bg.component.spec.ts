import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBgComponent } from './add-bg.component';

describe('AddBgComponent', () => {
  let component: AddBgComponent;
  let fixture: ComponentFixture<AddBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
