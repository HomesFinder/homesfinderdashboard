import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderinfoComponent } from './builderinfo.component';

describe('BuilderinfoComponent', () => {
  let component: BuilderinfoComponent;
  let fixture: ComponentFixture<BuilderinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilderinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
