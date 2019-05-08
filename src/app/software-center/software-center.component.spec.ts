import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareCenterComponent } from './software-center.component';

describe('SoftwareCenterComponent', () => {
  let component: SoftwareCenterComponent;
  let fixture: ComponentFixture<SoftwareCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
