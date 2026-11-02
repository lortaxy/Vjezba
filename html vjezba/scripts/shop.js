import { shirtProducts } from '../data/products.js';
import {formatCurrency} from './utils/money.js';
import { hoodieProducts } from '../data/products.js';
import { pantsProducts } from '../data/products.js';

let shirtsHTML = '';

shirtProducts.forEach((shirt) => {
  shirtsHTML += `
  <div class="box">
    <div class="image-container"> 
      <img class="product-picture" src="${shirt.image}">
      <img class="product-picture3" src="${shirt.image2}">
    <div class="sale-info">
      ${shirt.saleInfo} 
    </div>
  </div>
      <div class="product-info">
      <div class="product-name">
       ${shirt.name}
    </div>
    <div class="product-price-alt-currency"> 
    <div class="product-price">
      ${formatCurrency(shirt.priceCents)} €
    </div>
    <div class="alt-currency">
      ${shirt.altCurrency} Kn
    </div>
  </div> 
    </div>
  </div>
  `;
});

document.querySelector('.js-shirts-flex').innerHTML = shirtsHTML;

let hoodiesHTML = '';

hoodieProducts.forEach((hoodie) => {
  hoodiesHTML += `
  <div class="box">
    <div class="image-container"> 
      <img class="product-picture" src="${hoodie.image}">
      <img class="product-picture3" src="${hoodie.image2}">
    <div class="sale-info">
      ${hoodie.saleInfo} 
    </div>
  </div>
    <div class="product-info">
      <div class="product-name">
       ${hoodie.name}
    </div>
    <div class="product-price-alt-currency"> 
    <div class="product-price">
      ${formatCurrency(hoodie.priceCents)} €
    </div>
    <div class="alt-currency">
      ${hoodie.altCurrency} Kn
    </div>
  </div> 
    </div>
    </div>
  `;
});

document.querySelector('.js-hoodies-flex').innerHTML = hoodiesHTML;

let pantsHTML = '';

pantsProducts.forEach((pants) => {
  pantsHTML += `
  <div class="box">
    <div class="image-container"> 
      <img class="product-picture" src="${pants.image}">
      <img class="product-picture3" src="${pants.image2}">
    <div class="sale-info">
      ${pants.saleInfo} 
    </div>
  </div>
    <div class="product-info">
      <div class="product-name">
       ${pants.name}
    </div>
    <div class="product-price-alt-currency"> 
    <div class="product-price">
      ${formatCurrency(pants.priceCents)} €
    </div>
    <div class="alt-currency">
      ${pants.altCurrency} Kn
    </div>
  </div> 
    </div>
  </div>
  `;
});

document.querySelector('.js-pants-flex').innerHTML = pantsHTML;

