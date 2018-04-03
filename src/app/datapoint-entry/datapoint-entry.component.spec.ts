import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapointEntryComponent } from './datapoint-entry.component';

describe('DatapointEntryComponent', () => {
  let component: DatapointEntryComponent;
  let fixture: ComponentFixture<DatapointEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapointEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapointEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
