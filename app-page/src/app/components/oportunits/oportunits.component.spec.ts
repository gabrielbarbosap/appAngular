import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunitsComponent } from './oportunits.component';

describe('OportunitsComponent', () => {
  let component: OportunitsComponent;
  let fixture: ComponentFixture<OportunitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OportunitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OportunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
