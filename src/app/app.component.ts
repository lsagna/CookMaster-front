import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'CookMaster';
  isLogged = false;
  
  ngOnInit(): void {
	if (localStorage.getItem('token')) this.isLogged = true;
  }
}
