import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    onSignOut() {
        localStorage.setItem('isUserLoggedIn', JSON.stringify(false));
    }
}
