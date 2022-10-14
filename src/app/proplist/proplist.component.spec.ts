import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProplistComponent } from './proplist.component';

describe('ProplistComponent', () => {
  let component: ProplistComponent;
  let fixture: ComponentFixture<ProplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProplistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
