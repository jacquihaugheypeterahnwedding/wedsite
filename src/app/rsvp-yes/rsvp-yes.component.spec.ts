import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpYesComponent } from './rsvp-yes.component';

describe('RsvpYesComponent', () => {
  let component: RsvpYesComponent;
  let fixture: ComponentFixture<RsvpYesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RsvpYesComponent]
    });
    fixture = TestBed.createComponent(RsvpYesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
