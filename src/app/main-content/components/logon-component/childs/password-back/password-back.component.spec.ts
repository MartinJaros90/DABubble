import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PasswordBackComponent} from './password-back.component';

describe('PasswordBackComponent', () => {
    let component: PasswordBackComponent;
    let fixture: ComponentFixture<PasswordBackComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PasswordBackComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PasswordBackComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
