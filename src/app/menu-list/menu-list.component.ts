import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { MatDialog } from '@angular/material/dialog';
import { MenuListSettingDialogComponent } from '../menu-list-setting-dialog/menu-list-setting-dialog.component';
import { Menu } from '../interface/menu.types';
import { SelectedMenuService } from '../services/selected-menu.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-menu-list',
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

    public allViewMenu: Menu = {id: 0, name: '전체보기'};
    public menuList: Menu[] = [];
    public selectedMenuId = 0;

    constructor(
        private readonly dbService: NgxIndexedDBService,
        private readonly selectedMenuService: SelectedMenuService,
    ) { }

    ngOnInit() {
        this.selectedMenuId = this.selectedMenuService.selectedMenuId;

        this.selectedMenuService.selectedMenuId$.subscribe(menuId => {
            if (menuId !== undefined) {
                this.selectedMenuId = menuId;
            }
        });

        this.getMenuList();
    }

    public getMenuList() {
        this.dbService.getAll('menu').subscribe(
            menuList => {
                this.menuList = menuList;
            },
            error => {
                console.log(error);
            }
        );
    }

    public clickMenu(menuId: number) {
        this.selectedMenuService.selectedMenuId = menuId;
    }
}
