import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCenterComponent } from './top-center.component';

describe('TopCenterComponent', () => {
  let component: TopCenterComponent;
  let fixture: ComponentFixture<TopCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
