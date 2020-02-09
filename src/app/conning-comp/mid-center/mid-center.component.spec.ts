import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidCenterComponent } from './mid-center.component';

describe('MidCenterComponent', () => {
  let component: MidCenterComponent;
  let fixture: ComponentFixture<MidCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
