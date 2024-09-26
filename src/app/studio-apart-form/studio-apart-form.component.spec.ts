import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioApartFormComponent } from './studio-apart-form.component';

describe('StudioApartFormComponent', () => {
  let component: StudioApartFormComponent;
  let fixture: ComponentFixture<StudioApartFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioApartFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudioApartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
