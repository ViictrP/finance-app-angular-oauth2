import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotPermittedComponent } from './not-permitted.component';

describe('NotPermitedComponent', () => {
  let component: NotPermittedComponent;
  let fixture: ComponentFixture<NotPermittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotPermittedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotPermittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
