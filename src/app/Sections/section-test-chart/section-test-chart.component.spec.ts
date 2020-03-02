import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTestChartComponent } from './section-test-chart.component';

describe('SectionTestChartComponent', () => {
  let component: SectionTestChartComponent;
  let fixture: ComponentFixture<SectionTestChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTestChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTestChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
