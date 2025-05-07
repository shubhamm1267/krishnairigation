import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';


@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterModule],
  standalone:true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product = {
    name: 'Drip Irrigation Kit',
    description: 'A high-quality drip irrigation system perfect for small and large-scale farms.',
    image: 'assets/drip1.jpg',
    price: 1499,
    features: ['Durable material', 'Easy installation', 'Water-efficient', 'UV resistant']
  };

  constructor(private location: Location) {
    const nav = this.location.getState() as { product?: any };

    if (nav?.product) {
      console.log('Navigation product:', nav.product);
      this.product = nav.product;
    }
    else {
      console.warn('No product data found in navigation state');
    }
  }
}
