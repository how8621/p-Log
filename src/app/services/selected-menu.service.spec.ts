import { TestBed } from '@angular/core/testing';

import { SelectedMenuService } from './selected-menu.service';

describe('SelectedMenuService', () => {
    let service: SelectedMenuService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SelectedMenuService);
    });

    xit('should be created', () => {
        expect(service).toBeTruthy();
    });
});
