import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { CatalogueComponent } from '../catalogue/catalogue.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,HomePageComponent,CatalogueComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor( private router: Router){}
  openPage(route:string){
    this.router.navigate([route]);
  }
  
}
