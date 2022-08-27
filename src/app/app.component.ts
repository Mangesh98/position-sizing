import { Component, OnInit} from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  check=0;

  ngOnInit(): void {
    if(this.check==0){
      document.documentElement.style.setProperty(
        '--bs-gray-dark',
        'rgba(239, 243, 255, 1)'
      );
    }
  }
  title='Position Sizing'
  icon = faSun;
  var1=15641;
  year=new Date().getFullYear();

  changeIcon() {
    this.check=1;
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
      document.documentElement.style.setProperty(
        '--bs-gray-dark',
        'rgba(41, 47, 68, 1)'
      );
    } else {
      this.icon = faSun;
      document.documentElement.style.setProperty('--bs-navbar-color', 'red');
      document.documentElement.style.setProperty('--bs-white', 'white');
      document.documentElement.style.setProperty('--bs-black', 'black');
      document.documentElement.style.setProperty('--bs-primary', 'royalblue');
      document.documentElement.style.setProperty('--bs-blue', 'royalblue');
      document.documentElement.style.setProperty(
        '--bs-gray-dark',
        'rgba(239, 243, 255, 1)'
      );

    }
  }
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

 
  
}
