import { Product, CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

declare var AppboyPlugin: any;

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  cart: Product[] = [];

  constructor(private cartService: CartService, private router: Router ,private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    AppboyPlugin.logCustomEvent("Cart viewed");
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close() {
    this.router.navigate(['/home']);
  }

  async checkout() {
    // Perfom PayPal or Stripe checkout process
    const total = this.getTotal();
    const amount = this.cart.length;
    const products = this.cart.map((p) => p.name);

    AppboyPlugin.logPurchase("Order purchased",total,'ARS', amount, {"products":products});
    
    this.router.navigate(['/home']);
    this.cartService.deleteCart();

  }
}