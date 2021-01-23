import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
    isDisplayCarSpareParts: boolean = true;
    isDisplayCarAccessories: boolean = false;
    isDisplayCarEmergencyAccessories: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    displayImages(value: number) {
        if (value === 1) {
            this.isDisplayCarAccessories = true;
            this.isDisplayCarAccessories = false;
            this.isDisplayCarEmergencyAccessories = false;
        } else if (value === 2) {
            this.isDisplayCarAccessories = true;
            this.isDisplayCarSpareParts = false;
            this.isDisplayCarEmergencyAccessories = false;
        } else {
            this.isDisplayCarEmergencyAccessories = true;
            this.isDisplayCarSpareParts = false;
            this.isDisplayCarAccessories = false;
        }
    }
}
