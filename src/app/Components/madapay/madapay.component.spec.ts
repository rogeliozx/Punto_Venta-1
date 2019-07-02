import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadapayComponent } from './madapay.component';

describe('MadapayComponent', () => {
  let component: MadapayComponent;
  let fixture: ComponentFixture<MadapayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadapayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadapayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
