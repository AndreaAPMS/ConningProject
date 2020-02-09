import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidRightComponent } from './mid-right.component';

describe('MidRightComponent', () => {
  let component: MidRightComponent;
  let fixture: ComponentFixture<MidRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
