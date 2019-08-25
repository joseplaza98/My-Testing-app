import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginPage } from '../login/login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateConfirmPassword } from '../../../services/Validate/confirmPassword';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from '@angular/fire/database';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  registerForm: FormGroup;
  registerForm2: FormGroup;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public formbuilder: FormBuilder, public alertCtrl: AlertController, public afDb: AngularFireDatabase) {

    this.registerForm = this.formbuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(6), ValidateConfirmPassword]]
    })

    this.registerForm2 = this.formbuilder.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
    })
  }


  submitForm() {
  
    this.afAuth.auth.createUserWithEmailAndPassword(this.registerForm.value.email, this.registerForm.value.password)
      .then((response) => {
        this.afDb.database.ref('/usuario').push(this.registerForm2.value)
        .then(() => {
          this.registerForm.reset();
          console.log('guardado');
        })
        
        this.presentAlert('Usuario Registrado.', 'Usuario Registrado con exito.');
        this.navCtrl.setRoot(LoginPage);
      })
      .catch((error) => {
        if (error.code == 'auth/email-already-in-use') {
          this.presentAlert('Error', 'No se puede usar esa direccion de correo.');
        }
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
    console.log('ionViewDidLoad RegisterPage');
  }

  Register(user: User) {

    try {
      const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      this.navCtrl.push(LoginPage);
      alert('Usuario registrado');
      console.log(result);


      //
    }
    catch (e) {
      alert(e);
    }

  }

}
