import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Product } from '../../../models/product';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
    isDisplayCarSpareParts: boolean = true;
    isDisplayCarAccessories: boolean = false;
    isDisplayCarEmergencyAccessories: boolean = false;

    carParts: Product[] = [
        {
            name: 'Steering Wheel Cover',
            beforePrice: '35.00',
            afterPrice: '30.00',
            imgRef: 'assets/img/products/products-img1.jpg',
        },

        {
            name: 'Steering Wheel Cover',
            beforePrice: '35.00',
            afterPrice: '30.00',
            imgRef: 'assets/img/products/products-img1.jpg',
        },

        {
            name: 'Steering Wheel Cover',
            beforePrice: '35.00',
            afterPrice: '30.00',
            imgRef: 'assets/img/products/products-img1.jpg',
        },

        {
            name: 'Steering Wheel Cover',
            beforePrice: '35.00',
            afterPrice: '30.00',
            imgRef: 'assets/img/products/products-img1.jpg',
        },

        {
            name: 'Steering Wheel Cover',
            beforePrice: '35.00',
            afterPrice: '30.00',
            imgRef: 'assets/img/products/products-img1.jpg',
        },

        {
            name: 'Steering Wheel Cover',
            beforePrice: '35.00',
            afterPrice: '30.00',
            imgRef: 'assets/img/products/products-img1.jpg',
        },

        {
            name: 'Steering Wheel Cover',
            beforePrice: '35.00',
            afterPrice: '30.00',
            imgRef: 'assets/img/products/products-img1.jpg',
        },

        {
            name: 'Steering Wheel Cover',
            beforePrice: '35.00',
            afterPrice: '30.00',
            imgRef: 'assets/img/products/products-img1.jpg',
        },

        {
            name: 'Steering Wheel Cover',
            beforePrice: '35.00',
            afterPrice: '30.00',
            imgRef: 'assets/img/products/products-img1.jpg',
        },
    ];

    constructor(private router: Router) {}

    ngOnInit(): void {}

    navigateToCart(product) {
        const queryParams: any = {};
        queryParams.product = JSON.stringify(product);
        const navigationExtras: NavigationExtras = {
            queryParams,
        };

        this.router.navigate(['/cart'], navigationExtras);
    }

    displayImages(value: number) {
        if (value === 1) {
            this.isDisplayCarSpareParts = true;
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
