import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FruitsService } from '../../../services/fruits.service';
/**
 * Generated class for the RegistroProveedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-proveedor',
  templateUrl: 'registro-proveedor.html',
})
export class RegistroProveedorPage {

  idSelected: any;
  show: boolean;
  fruits = [];
  fruit = { id: 0, name: null, quantity: null };

  constructor(public navCtrl: NavController, public fruitsService: FruitsService) {
    this.show = false;
    this.idSelected = 0;

    fruitsService.getFruits()
      .subscribe(fruits => {
        this.fruits = fruits;
      });
  }

  saveFruit() {
    if (this.idSelected != 0) {
      this.fruitsService.updateFruit(this.fruit);
    } else {
      this.fruitsService.saveFruit(this.fruit);
    }
    this.clear();
  }
  selectFruit(id) {
    this.show = true;
    this.idSelected = id;

    let receivedFruit: any;

    this.fruitsService.getFruit(id)
      .subscribe(fruit => {
        receivedFruit = fruit;
        this.fruit = receivedFruit;
      });
  }
  removeSelectedFruit() {
    this.fruitsService.removeFruit(this.idSelected);
    this.clear();
  }
  clear() {
    this.show = false;
    this.idSelected = 0;
    this.fruit.name = null;
    this.fruit.id = null;
    this.fruit.quantity = null;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroProveedorPage');
  }

}
