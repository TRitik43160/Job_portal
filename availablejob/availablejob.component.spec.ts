import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablejobComponent } from './availablejob.component';

describe('AvailablejobComponent', () => {
  let component: AvailablejobComponent;
  let fixture: ComponentFixture<AvailablejobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailablejobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailablejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
