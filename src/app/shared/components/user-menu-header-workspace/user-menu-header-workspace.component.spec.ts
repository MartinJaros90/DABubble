import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserMenuHeaderWorkspaceComponent} from './user-menu-header-workspace.component';

describe('UserMenuHeaderWorkspaceComponent', () => {
    let component: UserMenuHeaderWorkspaceComponent;
    let fixture: ComponentFixture<UserMenuHeaderWorkspaceComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UserMenuHeaderWorkspaceComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(UserMenuHeaderWorkspaceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
