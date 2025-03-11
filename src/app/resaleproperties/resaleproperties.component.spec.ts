import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResalepropertiesComponent } from './resaleproperties.component';

describe('ResalepropertiesComponent', () => {
  let component: ResalepropertiesComponent;
  let fixture: ComponentFixture<ResalepropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResalepropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResalepropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
