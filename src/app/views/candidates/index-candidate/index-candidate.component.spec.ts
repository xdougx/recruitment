import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCandidateComponent } from './index-candidate.component';

describe('IndexCandidateComponent', () => {
  let component: IndexCandidateComponent;
  let fixture: ComponentFixture<IndexCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
