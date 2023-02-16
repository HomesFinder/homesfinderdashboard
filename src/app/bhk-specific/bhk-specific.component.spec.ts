import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhkSpecificComponent } from './bhk-specific.component';

describe('BhkSpecificComponent', () => {
  let component: BhkSpecificComponent;
  let fixture: ComponentFixture<BhkSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhkSpecificComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhkSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
