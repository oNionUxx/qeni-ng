import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private users: any = [
        {
            username: 'admin',
            password: 'admin',
        },
        {
            username: 'oNionUxx',
            password: 'Red12345',
        },
        {
            username: 'Jarvis',
            password: 'Purple789',
        },
    ];
    constructor() {}

    get usersData() {
        return this.users;
    }
}
