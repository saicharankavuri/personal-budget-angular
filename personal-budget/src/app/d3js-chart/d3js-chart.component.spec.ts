import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3jsChartComponent } from './d3js-chart.component';

describe('D3jsChartComponent', () => {
  let component: D3jsChartComponent;
  let fixture: ComponentFixture<D3jsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [D3jsChartComponent]
    });
    fixture = TestBed.createComponent(D3jsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
