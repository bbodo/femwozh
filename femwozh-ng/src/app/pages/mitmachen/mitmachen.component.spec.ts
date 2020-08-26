import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitmachenComponent } from './mitmachen.component';

describe('MitmachenComponent', () => {
  let component: MitmachenComponent;
  let fixture: ComponentFixture<MitmachenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitmachenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitmachenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
