import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltiptestComponent } from './tooltiptest.component';

describe('TooltiptestComponent', () => {
  let component: TooltiptestComponent;
  let fixture: ComponentFixture<TooltiptestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltiptestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltiptestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
