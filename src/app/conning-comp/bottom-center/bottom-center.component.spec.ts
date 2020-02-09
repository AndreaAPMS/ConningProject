import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomCenterComponent } from './bottom-center.component';

describe('BottomCenterComponent', () => {
  let component: BottomCenterComponent;
  let fixture: ComponentFixture<BottomCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
