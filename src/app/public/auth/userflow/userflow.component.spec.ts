import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserflowComponent } from './userflow.component';

describe('UserflowComponent', () => {
  let component: UserflowComponent;
  let fixture: ComponentFixture<UserflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
