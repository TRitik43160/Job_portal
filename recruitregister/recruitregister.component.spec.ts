import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitregisterComponent } from './recruitregister.component';

describe('RecruitregisterComponent', () => {
  let component: RecruitregisterComponent;
  let fixture: ComponentFixture<RecruitregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
