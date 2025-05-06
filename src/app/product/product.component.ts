import { Component } from '@angular/core';
import { Router ,RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product',
  imports: [CommonModule,RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products = [
    { id: 1, name: 'PVC Pipe', image: 'assets/drip2.webp', description: 'Durable for irrigation' ,price:1899},
    { id: 2, name: 'HDPE Pipe', image: 'assets/drip4.webp', description: 'Flexible and strong',price:1999 },
    { id: 3, name: 'Sprinkler Pipe', image: 'assets/drip3.webp', description: 'For spray irrigation',price:2299 },
  ];

  constructor(private router:Router){}

  
  goToProduct(product: any) {
    this.router.navigate(['/products', product.id], {
      state: { product: { ...product } }
    });    
  }
  
  
}
