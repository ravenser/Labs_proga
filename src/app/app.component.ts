import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any;
  constructor(/*private platform: Platform,
              private splashScreen: SplashScreen,
               private statusbar: StatusBar*/) 
  {
    this.sidemenu();
    this.initializeApp();
  }
  initializeApp(){
    /*this.platform.ready().then(() => {
      this.statusbar.styleDefault();
      this.splashScreen.hide();
    })*/
  };
  sidemenu(){
    this.navigate=[
      {
        title : 'Лабораторна робота №1',
        url : '/lab1_1',
      },
      {
        title : 'Лаюораторна робота №2',
        url : '/lab2',
      },
    ];
  }
}
