import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth.service';
import { RegisterPage } from '../register/register';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../../home/home';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  loginForm: FormGroup;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public viewCtrl: ViewController, public authService: AuthService, public formbuilder: FormBuilder) {
    
    this.loginForm = this.formbuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })

  }



  submitLogin() {
    this.afAuth.auth.signInWithEmailAndPassword(
      this.loginForm.value.email, this.loginForm.value.password)
      .then(() => {
        this.presentAlert('Bienvenido a Register Business', '');
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error) => {
        if(error.code == 'auth/wrong-password') {
          this.presentAlert('Error', 'Usuario o contraseña incorrectos');
          this.loginForm.controls['password'].setValue(null);
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
    console.log('ionViewDidLoad LoginPage');
  }





  
  async Login(user: User) {
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
    
    .then((returnedUser) => {
        this.navCtrl.setRoot(HomePage);
        const alert = this.alertCtrl.create({
          title: 'Bienvenido',
          subTitle: 'Register Business le da la bienvenida, gracias por preferirnos.',
          buttons: ['OK']
        });
        alert.present();

      })
      .catch((err) => {

        const alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Email o contraseña incorrectos por favor intentelo de nuevo.',
          buttons: ['OK']
        });
        alert.present();

 
        console.log('Error', err);
        
      })
    
  }


  aRegister() {
    this.navCtrl.push(RegisterPage);

  }

}