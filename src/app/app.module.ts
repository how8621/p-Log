import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostAddComponent } from './post-add/post-add.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MenuListSettingDialogComponent } from './menu-list-setting-dialog/menu-list-setting-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { PostComponent } from './post/post.component';

const dbConfig: DBConfig = {
    name: 'pLogDB',
    version: 2,
    objectStoresMeta: [
        {
            store: 'menu',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'name', keypath: 'name', options: { unique: false} }
            ]
        },
        {
            store: 'post',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'title', keypath: 'title', options: { unique: false } },
                { name: 'note', keypath: 'note', options: { unique: false } },
                { name: 'menuId', keypath: 'menuId', options: { unique: false } },
            ]
        }
    ]
};

@NgModule({
    declarations: [
        AppComponent,
        PostAddComponent,
        MenuListComponent,
        MenuListSettingDialogComponent,
        PostComponent
    ],
    imports: [
        NgxIndexedDBModule.forRoot(dbConfig),
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatDialogModule,
        MatTableModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
