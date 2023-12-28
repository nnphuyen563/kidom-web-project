import { Injectable } from '@angular/core';
import { Catagory } from '../shared/models/Catagory';
import { CATAGORYS } from '../../data';

@Injectable({
    providedIn: 'root'
})
export class CatagoryService {

    constructor() { }

    getAll(): Catagory [] {
        return CATAGORYS;
    }
}