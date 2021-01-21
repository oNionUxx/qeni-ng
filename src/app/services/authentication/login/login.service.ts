import { Injectable } from '@angular/core';
import { UserService } from '../../users/user.service';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(private userService: UserService) {}

    // Login method
    login(username: string, password: string) {
        const userData = this.userService.usersData.find((user) => user.username === username);

        if (userData) {
            if (userData.password === password) {
                localStorage.setItem('isUserLoggedIn', JSON.stringify(true));
                return userData;
            } else {
                // alert('Password is incorrect')
                return;
            }
        } else {
            // alert('User was not found')
            return;
        }
    }

    public isLoggedIn() {
        return JSON.parse(localStorage.getItem('isUserLoggedIn'));
    }
}
