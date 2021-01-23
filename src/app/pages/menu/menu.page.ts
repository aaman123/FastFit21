import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // this.router.events.subscribe( event => {
    //   if( event instanceof  NavigationStart) {
    //     location.reload();
    //     console.log('chikababu')
    //   }
    // })
  }


}
