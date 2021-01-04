import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
    selector: 'app-post-add',
    templateUrl: './post-add.component.html',
    styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {

    public title;
    public note;

    constructor(
        private readonly dbService: NgxIndexedDBService,
    ) { }

    ngOnInit() {
    }
}
