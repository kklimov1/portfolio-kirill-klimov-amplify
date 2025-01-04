import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkAnalysisComponent } from './spark-analysis.component';

describe('SparkAnalysisComponent', () => {
  let component: SparkAnalysisComponent;
  let fixture: ComponentFixture<SparkAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SparkAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparkAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
