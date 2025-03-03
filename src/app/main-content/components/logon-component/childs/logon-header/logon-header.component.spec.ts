import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogonHeaderComponent } from './logon-header.component';

describe('LogonHeaderComponent', () => {
  let component: LogonHeaderComponent;
  let fixture: ComponentFixture<LogonHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogonHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
