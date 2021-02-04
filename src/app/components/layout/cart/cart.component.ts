import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/product';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    productToBeAdded: Product;

    quantity: number = 1;
    totalProductPrice: number = 0;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.productToBeAdded = JSON.parse(this.activatedRoute.snapshot.queryParamMap.get('product'));
        this.totalProductPrice = Number(this.productToBeAdded.afterPrice);
    }

    addUnit() {
        this.quantity += 1;
        this.totalProductPrice = Number(this.productToBeAdded.afterPrice) * this.quantity;
    }

    removeUnit() {
        console.log(this.quantity);
        this.quantity -= 1;
        if (this.quantity < 1) {
            this.quantity = 1;
        } else {
            if (this.quantity > 0) {
                this.totalProductPrice = Number(this.productToBeAdded.afterPrice) * this.quantity;
            }
        }
    }
}
