import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../Sesión/login/login';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { GestionEmpresasPage } from '../My Testing/Empresas/gestion-empresas/gestion-empresas';
import { SelecTestPage } from '../My Testing/Metodo de evaluacion/selec-test/selec-test';
import { ResultadosPage } from '../My Testing/Metodo de evaluacion/Analisis de datos/resultados/resultados';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, public navParams: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController, public authService: AuthService, public alertController: AlertController) {

  }

  aGestionEmpresas() {
    this.navCtrl.push(GestionEmpresasPage);
  }

  aSelecTest() {
    this.navCtrl.push(SelecTestPage)
  }

  aResultados(){
    this.navCtrl.push(ResultadosPage);
  }

  singOut() {

    const confirm = this.alertController.create({
      title: 'Confirmación',
      message: '¿Esta seguro que quiere cerrar la sesión?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.afAuth.auth.signOut();
            /** Este deja pasar entre paginas pero deja las taps al volver a la pagina login*/
            this.navCtrl.setRoot(LoginPage);

            /**Este quita las taps y regresa a la pagina inicio pero genera un error al ingresar de nuevo */
            /**this.app.getRootNav().setRoot(LoginPage);*/
            console.log('Aceptar activado');
          }
        },
        {
          text: 'Cancelar',
          handler: () => {

            console.log('Cancelar activado');
          }
        }
      ]
    });
    confirm.present();
  }

}


/**
alsProve(){
  this.navCtrl.push(LsProvePage);
}

aRegistroProveedor(){
  this.navCtrl.push(RegistroProveedorPage);
}
*/