
import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";


@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {}
  ngOnInit(): void {
    // @ts-ignore
    AppboyPlugin.changeUser("test_agus_antonny");

    // @ts-ignore
    const r = AppboyPlugin.getNewsFeed(
      (s) => console.log("success", s),
      (e) => console.log(e)
    );

    // @ts-ignore
    console.log(AppboyPlugin);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}