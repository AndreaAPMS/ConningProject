import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidLeftComponent } from './mid-left.component';

describe('MidLeftComponent', () => {
  let component: MidLeftComponent;
  let fixture: ComponentFixture<MidLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
