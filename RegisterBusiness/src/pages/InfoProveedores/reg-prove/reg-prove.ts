import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LsProvePage } from '../ls-prove/ls-prove';
import 'rxjs/add/operator/map';
/**
 * Generated class for the RegProvePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reg-prove',
  templateUrl: 'reg-prove.html',
})
export class RegProvePage {

  registerForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public formbuilder: FormBuilder, public db: AngularFireDatabase) {
    this.registerForm = this.formbuilder.group({

      name: [null, [Validators.required, Validators.minLength(10)]],
      nit: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      razSoc: [null, [Validators.required, Validators.minLength(10)]],
      address: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      phone: [null, [Validators.required, Validators.minLength(7), Validators.maxLength(10)]],
      cellphone: [null, [Validators.required, Validators.minLength(10), , Validators.maxLength(13)]],
      email: [null, [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
      country: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      state: [null, [Validators.required, Validators.minLength(5)], Validators.maxLength(10)],
      city: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],


    })

  }


  registroProve() {
    this.db.database.ref('/proveedores').push(this.registerForm.value)
      .then(() => {
        this.presentAlert('Estado del registro.', 'Proveedor Registrado con exito.');
        this.navCtrl.setRoot(LsProvePage);
        this.registerForm.reset();
      })
      .catch((error) => {
        this.presentAlert('Error', 'No se puedo registrar este Proveedor, por favor intentelo de nuevo.');
      })

  }
  presentAlert(title: string, subtitle: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegProvePage');
  }

}
