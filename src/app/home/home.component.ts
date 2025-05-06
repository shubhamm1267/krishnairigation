import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  testimonials = [
    {
      content: "Great product! Our farm's yield improved significantly.",
      author: "– Vijay Mahajan"
    },
    {
      content: "Saved so much water and time using these irrigation pipes!",
      author: "– Ajay Patil"
    },
    {
      content: "Highly recommended for sustainable farming.",
      author: "– Vishal Chaudhari"
    }
  ];

  stats = [
    { label: 'Dealer PAN India', target: 500, count: 0 },
    { label: 'Cities', target: 100, count: 0 },
    { label: 'Products', target: 40, count: 0 },
    { label: 'Team Member', target: 100, count: 0 }
  ];

  products = [
    {
      name: 'Drip irrigation system',
      image: '/assets/drip1.jpg'
    },
    {
      name: 'HDPE Pipes',
      image: '/assets/drip2.webp'
    },
    {
      name: 'Drip irrigation system',
      image: '/assets/drip3.webp'
    }
  ];

  currentIndex = 0;


  ngOnInit() {
    setInterval(() => this.nextSlide(), 3000);

    this.stats.forEach((stat, index) => {
      const stepTime = Math.floor(2000 / stat.target);
      const interval = setInterval(() => {
        if (this.stats[index].count < stat.target) {
          this.stats[index].count++;
        } else {
          clearInterval(interval);
        }
      }, stepTime);
    });
  }
  
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  setSlide(index: number) {
    this.currentIndex = index;
  }
}