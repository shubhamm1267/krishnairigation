import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  closeNavbar() {
    const navbar = document.getElementById('navbarNav');
    if (navbar?.classList.contains('show')) {
      const collapseElement = new bootstrap.Collapse(navbar, { toggle: false });
      collapseElement.hide();
    }
  }
  
}
