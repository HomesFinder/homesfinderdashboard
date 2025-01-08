import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalpropertiesformComponent } from './rentalpropertiesform.component';

describe('RentalpropertiesformComponent', () => {
  let component: RentalpropertiesformComponent;
  let fixture: ComponentFixture<RentalpropertiesformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalpropertiesformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalpropertiesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
