import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivepageComponent } from './drivepage.component';

describe('DrivepageComponent', () => {
  let component: DrivepageComponent;
  let fixture: ComponentFixture<DrivepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrivepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrivepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
