import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMainComponent } from './section-main.component';

describe('SectionMainComponent', () => {
  let component: SectionMainComponent;
  let fixture: ComponentFixture<SectionMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
