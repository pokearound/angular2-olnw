import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'default',
    template: '<h2>The requested page not found!</h2>'
})
export class PageNotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}