import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquriesComponent } from './inquries.component';

describe('InquriesComponent', () => {
  let component: InquriesComponent;
  let fixture: ComponentFixture<InquriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
