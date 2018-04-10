import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMetricComponent } from './new-metric.component';

describe('NewMetricComponent', () => {
  let component: NewMetricComponent;
  let fixture: ComponentFixture<NewMetricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMetricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
