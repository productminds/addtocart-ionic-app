import { CartService } from './../services/cart.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from './product.model';

declare var AppboyPlugin: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  cart = [];
  products: Product[];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    });
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  ionViewWillEnter() {
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product) {
    this.cartService.addProduct(product);
    // console.log(this.cart)
    AppboyPlugin.logCustomEvent("Item added to cart",{"product":product.name})

  }

  async openCart() {
    this.router.navigate(['/cart-modal']);
  }

}