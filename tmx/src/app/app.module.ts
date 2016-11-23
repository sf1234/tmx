import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { MainDiningRoomPage , PopoverPage } from '../pages/main-dining-room/main-dining-room';
import { FloorPlanEditorPage } from '../pages/floor-plan-editor/floor-plan-editor';
import { AnalyticsPage } from '../pages/analytics/analytics';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';
import { AddPartyPage } from '../pages/add-party/add-party';
import { Timer } from '../pages/timer/timer';
import { FloorOnePage } from '../pages/floor-one/floor-one';
import { FloorTwoPage } from '../pages/floor-two/floor-two';
import { SDKModule } from './shared/sdk/index';
import { FloorService } from '../providers/floor-service';


@NgModule({
  declarations: [
    MyApp,
    MainDiningRoomPage,
    FloorPlanEditorPage,
    AnalyticsPage,
    SettingsPage,
    AboutPage,
    AddPartyPage,
    Timer,
    PopoverPage,
    FloorOnePage,
    FloorTwoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    SDKModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainDiningRoomPage,
    FloorPlanEditorPage,
    AnalyticsPage,
    SettingsPage,
    AboutPage,
    AddPartyPage,
    PopoverPage
	  ],
  schemas:     [],
  providers: [FloorService]
})
export class AppModule {}
