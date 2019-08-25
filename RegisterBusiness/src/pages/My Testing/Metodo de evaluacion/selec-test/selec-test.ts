import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Test1Page } from '../Test 1/test1/test1';
import { Test2Page } from '../Test 2/test2/test2';
import { Test3Page } from '../Test 3/test3/test3';

/**
 * Generated class for the SelecTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selec-test',
  templateUrl: 'selec-test.html',
})
export class SelecTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecTestPage');
  }

  aTest1() {
    this.navCtrl.push(Test1Page);
  }

  aTest2() {
    this.navCtrl.push(Test2Page);
  }

  aTest3() {
    this.navCtrl.push(Test3Page);
  }

}
