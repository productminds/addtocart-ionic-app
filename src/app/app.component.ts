import { Component  } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

declare var amplitude: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent{
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      amplitude.init("e3f7ef4e1d1dadceb0fe0da45d5e2c2d");
      // console.log(amplitude_var);

      // amplitude.getInstance().init("e3f7ef4e1d1dadceb0fe0da45d5e2c2d",
      // {
      //   logLevel: amplitude.getInstance().Types.LogLevel.Debug,
      // })

      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }
}
