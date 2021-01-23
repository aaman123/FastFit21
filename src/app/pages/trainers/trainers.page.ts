import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.page.html',
  styleUrls: ['./trainers.page.scss'],
})
export class TrainersPage implements OnInit {

  constructor(private router: Router,private videoplayer: VideoPlayer, private modalctrl: ModalController) { }

  ngOnInit() {
    // this.router.events.subscribe( event => {
    //   if( event instanceof  NavigationStart) {
    //     location.reload();
    //     console.log('chikababu')
    //   }
    // })
  }

  playVideo() {
    this.videoplayer.play('file:///android_asset/www/assets/Fastfit21.mp4').then( () => {
      console.log('video completed');
    }).catch( (err) => {
      console.log(err);
    })
  }



  doRefresh(event) {
    console.log('Begin async operation');
    location.reload();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }


}
