import {TestBed} from '@angular/core/testing';

import {RealtimeDbService} from './realtime-db.service';

describe('RealtimeDBService', () => {
    let service: RealtimeDbService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RealtimeDbService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
