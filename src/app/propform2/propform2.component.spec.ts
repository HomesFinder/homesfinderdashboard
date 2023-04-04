import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Propform2Component } from './propform2.component';

describe('Propform2Component', () => {
  let component: Propform2Component;
  let fixture: ComponentFixture<Propform2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Propform2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Propform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
