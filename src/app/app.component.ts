import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuPage } from '../pages/menu/menu';
import { DiscoverPage } from '../pages/discover/discover';
import { HomePage } from '../pages/home/home';
import { UploadResumePage } from '../pages/uploadresume/uploadresume';
import { WorkExperiencePage } from '../pages/workexperience/workexperience';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = WorkExperiencePage

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

