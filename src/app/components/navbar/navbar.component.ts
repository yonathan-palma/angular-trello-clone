import { Component, OnInit } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule, FontAwesomeModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  constructor() { }

  isOpen = false;
  isOpenBody = false;
  
  faBell = faBell;
  faInfoCircle = faInfoCircle;

  ngOnInit(): void {  
  }
}
