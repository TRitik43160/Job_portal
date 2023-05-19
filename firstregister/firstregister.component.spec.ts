import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstregisterComponent } from './firstregister.component';

describe('FirstregisterComponent', () => {
  let component: FirstregisterComponent;
  let fixture: ComponentFixture<FirstregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
