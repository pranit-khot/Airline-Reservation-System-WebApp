import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShowtransactionComponent } from './user-showtransaction.component';

describe('UserShowtransactionComponent', () => {
  let component: UserShowtransactionComponent;
  let fixture: ComponentFixture<UserShowtransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserShowtransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShowtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
