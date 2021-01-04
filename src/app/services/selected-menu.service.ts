import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/index';

@Injectable({
    providedIn: 'root'
})
export class SelectedMenuService {

    private menuId = 0;
    public selectedMenuId$ = new Subject<number>();

    constructor() { 

    }

    public get selectedMenuId(): number {
        return this.menuId;
    }

    public set selectedMenuId(menuId: number) {
        this.menuId = menuId;
        this.selectedMenuId$.next(this.menuId);
    }
}
