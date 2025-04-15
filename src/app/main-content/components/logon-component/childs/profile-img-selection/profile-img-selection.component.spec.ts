import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileImgSelectionComponent} from './profile-img-selection.component';

describe('ProfileImgSelectionComponent', () => {
    let component: ProfileImgSelectionComponent;
    let fixture: ComponentFixture<ProfileImgSelectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProfileImgSelectionComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ProfileImgSelectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
