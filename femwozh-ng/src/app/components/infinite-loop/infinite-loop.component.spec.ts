import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteLoopComponent } from './infinite-loop.component';

describe('InfiniteLoopComponent', () => {
  let component: InfiniteLoopComponent;
  let fixture: ComponentFixture<InfiniteLoopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteLoopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
