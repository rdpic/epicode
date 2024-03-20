import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivePostsComponent } from './inactive-posts.component';

describe('InactivePostsComponent', () => {
  let component: InactivePostsComponent;
  let fixture: ComponentFixture<InactivePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InactivePostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InactivePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
