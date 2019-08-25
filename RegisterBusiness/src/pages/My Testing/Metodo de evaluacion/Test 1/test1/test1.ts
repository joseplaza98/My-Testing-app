import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Test1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test1',
  templateUrl: 'test1.html',
})
export class Test1Page {

  ocultar1: boolean = false;
  ocultar2: boolean = false;

  ocultartodos: boolean = false; 

rp1_1: number;
  rp2_1: number;
 rp3_1: number;
  rp4_1: number;
  rp5_1: number;
  rp6_1: number;
  rp7_1: number;
  rp8_1: number;
  rp9_1: number;
  rp10_1: number;

  operacion :number;
  mostrarMensaje: boolean;
  arregloInt = [];
  arregloSuma = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

    this.rp1_1 = 0;
    this.rp2_1 = 0;
    this.rp3_1 = 0;
    this.rp4_1 = 0;
    this.rp5_1 = 0;
    this.rp6_1 = 0;
    this.rp7_1 = 0;
    this.rp8_1 = 0;
    this.rp9_1 = 0;
    this.rp10_1 = 0;

    this.mostrarMensaje = false; 
  }

  accion1() {        
    this.ocultar1 = !this.ocultar1;
    this.checkActiveButton();
  }

  accion2() {        
    this.ocultar2 = !this.ocultar2;
    this.checkActiveButton();
  }

    checkActiveButton() {

    if ( this.ocultar1) {
      this.ocultartodos = true;
    }
    else if ( !this.ocultar1) {
      this.ocultartodos = false;
    }
  }

    acciontodos() {

    if ( this.ocultartodos === false ) {
      this.ocultar1     = true;
      this.ocultar2     = true;
    }
    else {
      this.ocultar1     = false;
      this.ocultar2     = false;
    }
  
    this.ocultartodos = !this.ocultartodos;
  }

  actualizarRespuesta(): void {
    this.arregloInt =[this.rp1_1,this.rp2_1, this.rp3_1, this.rp4_1 ,this.rp5_1 ,this.rp6_1,this.rp7_1,this.rp8_1,this.rp9_1,this.rp10_1];

    if (this.mostrarMensaje) {
      
      var suma = 0;
      for(var i=0; i< this.arregloInt.length;i++){
        suma+= parseInt(this.arregloInt[i]); 
      }

      this.arregloSuma=[suma];

      this.showAlert();
    }
   
}

showAlert() {
    let alert = this.alertCtrl.create({
        title: 'Respuesta',
        subTitle: 'El estado de madurez es:'+this.arregloSuma+' '+'Arreglo de respuestas:'+this.arregloInt,
        buttons: ['OK']
    });
    alert.present();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Test1Page');
  }

 
}

 /**
logForm1() {

 
      var arreglo = [];
      arreglo = this.Test1;
  
      const arregloInt = arreglo.map(function returnInt(valor) {
        return parseInt(valor.selector);
      })
  
      /**
          var i = 0;
          for (i < 0; i < this.Test1.length; i++) {
            arreglo = this.Test1.map[i];
          }
          */

