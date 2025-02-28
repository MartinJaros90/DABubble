import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogonFooterComponent } from './logon-footer.component';

describe('LogonFooterComponent', () => {
  let component: LogonFooterComponent;
  let fixture: ComponentFixture<LogonFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogonFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogonFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
