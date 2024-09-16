import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTable, faBorderTopLeft, faChartLine, faClock, faHeart, faBorderAll, faUsers, faGear, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FontAwesomeModule, CdkAccordionModule],
  templateUrl: './boards.component.html'
})
export class BoardsComponent implements OnInit {

  constructor() { }
  faTable = faTable;
  faBorderTopLeft = faBorderTopLeft;
  faChartLine = faChartLine;
  faClock = faClock;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;


  expandedIndex = 0;

  items = [
    {
      label: "Item 1", 
      items:[
        {label: "Item 1.1"},
        {label: "Item 1.2"},
        {label: "Item 1.3"},
      ],
    },
    {
      label: "Item 2", 
      items:[
        {label: "Item 2.1"},
        {label: "Item 2.2"},
        {label: "Item 2.3"},
      ],
    },
    {
      label: "Item 3", 
      items:[
        {label: "Item 3.1"},
        {label: "Item 3.2"},
        {label: "Item 3.3"},
      ], 
    }
  ];

  ngOnInit (): void {
    
  }
}
