import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegProvePage } from '../reg-prove/reg-prove';
import { ModProvePage } from '../mod-prove/mod-prove';

/**
 * Generated class for the LsProvePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ls-prove',
  templateUrl: 'ls-prove.html',
})
export class LsProvePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  aRegProve() {
    this.navCtrl.push(RegProvePage);
  }

  aModProve() {
    this.navCtrl.push(ModProvePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LsProvePage');
  }

}
