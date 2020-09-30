import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateVoteBarComponent } from './animate-vote-bar.component';

describe('AnimateVoteBarComponent', () => {
  let component: AnimateVoteBarComponent;
  let fixture: ComponentFixture<AnimateVoteBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimateVoteBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateVoteBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
