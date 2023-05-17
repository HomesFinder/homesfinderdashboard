import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedPropsComponent } from './posted-props.component';

describe('PostedPropsComponent', () => {
  let component: PostedPropsComponent;
  let fixture: ComponentFixture<PostedPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostedPropsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostedPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
