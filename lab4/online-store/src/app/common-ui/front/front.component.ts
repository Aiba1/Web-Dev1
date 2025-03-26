import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-front',
  imports: [CommonModule], 
  templateUrl: './front.component.html',
  styleUrl: './front.component.scss'
})
export class FrontComponent {
  images = [
    //☆★
    {
      href: 'https://kaspi.kz/shop/p/samsung-galaxy-a25-5g-6-gb-128-gb-temno-sinii-115937459/?c=750000000',
      src: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=preview-large',
      name: 'Apple iPhone 16 Pro Max 256Gb золотистый',
      rating: '★★★★★ (486 отзывов)',
      price: '660 686 ₸'
    },
    {
      href: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      src: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large',
      name: 'Apple iPhone 13 128Gb черный',
      rating: '★★★★★ (3172 отзыва)',
      price: '275 949 ₸'
    },
    {
      href: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
      src: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=preview-large',
      name: 'Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
      rating: '★★★★☆ (2487 отзыва)',
      price: '47 634 ₸'
    },
    {
      href: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-256gb-chernyi-123887732/?c=750000000',
      src: 'https://resources.cdn-kaspi.kz/img/m/p/hbc/h31/87295483445278.png?format=preview-large',
      name: 'Apple iPhone 16 Pro 256Gb черный',
      rating: '★★★★★ (389 отзыва)',
      price: '643 831 ₸'
    },
    {
      href: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-seryi-133434844/?c=750000000',
      src: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/pc8/20118457.png?format=preview-large',
      name: 'Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ серый',
      rating: '★★★★★ (3 отзыва)',
      price: '617 374 ₸'
    },
    {
      href:'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000',
      src:'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=preview-large',
      name: 'Samsung Galaxy S24 Ultra 5G 12 ГБ/256 ГБ серый',
      rating: '★★★★★ (314 отзывов)',
      price: '486 361 ₸'
        },
    {
      href:'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-fioletovyi-116040965/?c=750000000',
      src:'https://resources.cdn-kaspi.kz/img/m/p/h51/h38/84960806862878.jpg?format=preview-large',
      name: 'Samsung Galaxy S24 5G 8 ГБ/256 ГБ фиолетовый',
      rating: '★★★★★ (53 отзывa)',
      price: '316 122 ₸'
        },
    {
      href:'https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000',
      src:'https://resources.cdn-kaspi.kz/img/m/p/hcb/h7e/85063476838430.jpg?format=preview-large',
      name: 'Realme Note 50 3 ГБ/64 ГБ черный',
      rating: '★★★★☆ (673 отзывов)',
      price: '37 880 ₸'
        },
    {
      href:'https://kaspi.kz/shop/p/oppo-a78-8-gb-256-gb-chernyi-112808573/?c=750000000',
      src:'https://resources.cdn-kaspi.kz/img/m/p/hc0/h02/83108938809374.jpg?format=preview-large',
      name: 'OPPO A78 8 ГБ/256 ГБ черный',
      rating: '★★★★★ (419 отзывов)',
      price: '71 235 ₸'
        },    {
      href:'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-sinii-114695505/?c=750000000',
      src:'https://resources.cdn-kaspi.kz/img/m/p/h67/h01/84526692565022.png?format=preview-large',
      name: 'OPPO A78 8 ГБ/256 ГБ черный',
      rating: '★★★★★ (640 отзывов)',
      price: '46 980 ₸'
        }
  ];
}
