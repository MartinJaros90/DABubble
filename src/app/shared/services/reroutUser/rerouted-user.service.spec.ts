import {TestBed} from '@angular/core/testing';

import {ReroutedUserService} from './rerouted-user.service';

describe('ReroutedUserService', () => {
    let service: ReroutedUserService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ReroutedUserService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
