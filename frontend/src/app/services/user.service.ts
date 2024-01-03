import { Injectable } from '@angular/core';
import { User } from '../shared/models/User';
import { USERS } from '../../data';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    authenticateUser(email: string, password: string): User | undefined {
        // Replace this with your actual authentication logic
        const user: User | undefined = USERS.find(u => u.account === email && u.password === password);
        return user;
    }

    constructor() { }

    getAll(): User [] {
        return USERS;
    }
}