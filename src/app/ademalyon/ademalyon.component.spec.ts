import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdemalyonComponent } from './ademalyon.component';

describe('AdemalyonComponent', () => {
  let component: AdemalyonComponent;
  let fixture: ComponentFixture<AdemalyonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdemalyonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdemalyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
