import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { MainDiningRoomPage } from '../pages/main-dining-room/main-dining-room';
import { FloorPlanEditorPage } from '../pages/floor-plan-editor/floor-plan-editor';
import { AnalyticsPage } from '../pages/analytics/analytics';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = MainDiningRoomPage;
  pages: Array<{title: string, component: any, icon : string}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();
    // set our app's pages
    this.pages = [
      { title: 'Main Dining Room', component: MainDiningRoomPage , icon :'restaurant' },
      { title: 'Floor Plan Editor', component: FloorPlanEditorPage , icon :'create' },
      { title: 'Analytics', component: AnalyticsPage, icon :'keypad' },
      { title: 'Settings', component: SettingsPage , icon :'settings'},
      { title: 'About', component: AboutPage , icon :'help' }

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
