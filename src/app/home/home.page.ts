import { Component } from '@angular/core';
import { NavigationStart, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  ngOnInit() {
    // this.router.events.subscribe( event => {
    //   if( event instanceof  NavigationEnd) {
    //     location.reload();
    //     console.log('chikababu')
    //   }
    // })
  }

}
