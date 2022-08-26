import { Component} from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title='Position Sizing'
  icon = faSun;
  var1=15641;
  year=new Date().getFullYear();
  changeIcon() {
    if (this.icon == faSun) {
      this.icon = faMoon;
      document.documentElement.style.setProperty('--bs-white', '#1d2b3a');
      document.documentElement.style.setProperty('--bs-navbar-color', 'red');
      document.documentElement.style.setProperty('--bs-black', '#fff');
      document.documentElement.style.setProperty(
        '--bs-primary',
        'rgba(255, 255, 255, 0.25)'
      );
      document.documentElement.style.setProperty('--bs-blue', '#fff');
    } else {
      this.icon = faSun;
      document.documentElement.style.setProperty('--bs-navbar-color', 'red');
      document.documentElement.style.setProperty('--bs-white', 'white');
      document.documentElement.style.setProperty('--bs-black', 'black');
      document.documentElement.style.setProperty('--bs-primary', 'royalblue');
      document.documentElement.style.setProperty('--bs-blue', 'royalblue');

    }
  }
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

 
  
}
