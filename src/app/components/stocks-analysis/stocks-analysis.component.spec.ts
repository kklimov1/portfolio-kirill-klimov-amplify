import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksAnalysisComponent } from './stocks-analysis.component';

describe('StocksAnalysisComponent', () => {
  let component: StocksAnalysisComponent;
  let fixture: ComponentFixture<StocksAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StocksAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StocksAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
