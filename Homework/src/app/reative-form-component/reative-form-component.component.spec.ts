import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativeFormComponentComponent } from './reative-form-component.component';

describe('ReativeFormComponentComponent', () => {
  let component: ReativeFormComponentComponent;
  let fixture: ComponentFixture<ReativeFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReativeFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativeFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
