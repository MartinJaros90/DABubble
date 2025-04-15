import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddPeopleAreaMiddleComponent} from './add-people-area-middle.component';

describe('AddPeopleAreaMiddleComponent', () => {
    let component: AddPeopleAreaMiddleComponent;
    let fixture: ComponentFixture<AddPeopleAreaMiddleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AddPeopleAreaMiddleComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AddPeopleAreaMiddleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
