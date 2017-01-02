import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'default',
    template: '<h2>The default Component!</h2>'
})
export class AppDefaultComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}