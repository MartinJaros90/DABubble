import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditChannelComponent} from './edit-channel.component';

describe('EditChannelComponent', () => {
    let component: EditChannelComponent;
    let fixture: ComponentFixture<EditChannelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [EditChannelComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(EditChannelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
