import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserMenuHeaderMobileComponent} from './user-menu-header-mobile.component';

describe('UserMenuHeaderMobileComponent', () => {
    let component: UserMenuHeaderMobileComponent;
    let fixture: ComponentFixture<UserMenuHeaderMobileComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UserMenuHeaderMobileComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(UserMenuHeaderMobileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
