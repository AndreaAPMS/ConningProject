import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConningLiveComponent } from './conning-live.component';

describe('ConningLiveComponent', () => {
  let component: ConningLiveComponent;
  let fixture: ComponentFixture<ConningLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConningLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConningLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
