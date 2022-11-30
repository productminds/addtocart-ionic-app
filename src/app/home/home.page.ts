import { CartService } from './../services/cart.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from './product.model';

declare var amplitude: any;

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

  constructor(private cartService: CartService, private router: Router, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.cartService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    });
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
    amplitude.logEvent("Home Page Viewed");
  }

  ionViewWillEnter() {
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product) {
    this.cartService.addProduct(product);
    console.log(this.cart)
    amplitude.logEvent("Add product to cart");
    this.animateCSS('tada');
  }

  async openCart() {

    this.router.navigate(['/cart-modal']);
  }

  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName)

    //https://github.com/daneden/animate.css
    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd)
    }
    node.addEventListener('animationend', handleAnimationEnd)
  }
}