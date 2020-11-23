import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleFinancialComponent } from './title-financial.component';

describe('TitleFinancialComponent', () => {
  let component: TitleFinancialComponent;
  let fixture: ComponentFixture<TitleFinancialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleFinancialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
