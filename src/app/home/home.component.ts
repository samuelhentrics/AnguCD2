import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // Injection de dépendance
  constructor(private router: Router) { }

  goToCatalogue(){
    this.router.navigateByUrl('/catalogue');
  }

}
