import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { LoginPage } from '../pages/Sesión/login/login';

var config = {
  apiKey: "AIzaSyCF1mzBCuO2QpxwtYaWTZUzmnRW6FkfP9k",
  authDomain: "my-testing-1dffb.firebaseapp.com",
  databaseURL: "https://my-testing-1dffb.firebaseio.com",
  projectId: "my-testing-1dffb",
  storageBucket: "",
  messagingSenderId: "179671640971",
  appId: "1:179671640971:web:f192c64dfcabd5a5"
};


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }


}
