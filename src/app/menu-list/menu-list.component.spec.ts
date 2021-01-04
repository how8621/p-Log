import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuListComponent } from './menu-list.component';

describe('MenuListComponent', () => {
    let component: MenuListComponent;
    let fixture: ComponentFixture<MenuListComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [MenuListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    xit('should create', () => {
        expect(component).toBeTruthy();
    });
});
