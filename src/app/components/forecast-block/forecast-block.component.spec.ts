import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastBlockComponent } from './forecast-block.component';

describe('ForecastBlockComponent', () => {
  let component: ForecastBlockComponent;
  let fixture: ComponentFixture<ForecastBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
