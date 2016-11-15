import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { MainDiningRoomPage } from '../pages/main-dining-room/main-dining-room';
import { FloorPlanEditorPage } from '../pages/floor-plan-editor/floor-plan-editor';
import { AnalyticsPage } from '../pages/analytics/analytics';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';
import { AddPartyPage } from '../pages/add-party/add-party';
import { Storage } from '@ionic/storage';
import { Data } from '../providers/data';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MainDiningRoomPage,
    FloorPlanEditorPage,
    AnalyticsPage,
    SettingsPage,
    AboutPage,
    AddPartyPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MainDiningRoomPage,
    FloorPlanEditorPage,
    AnalyticsPage,
    SettingsPage,
    AboutPage,
    AddPartyPage
  ],
  providers: [Storage,  Data]
})
export class AppModule {}
