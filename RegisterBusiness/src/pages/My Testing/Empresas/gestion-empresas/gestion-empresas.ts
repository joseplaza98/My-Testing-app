import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { EmpresasService } from '../../../../services/empresas.service';

import { Content } from 'ionic-angular';
/**
 * Generated class for the GestionEmpresasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestion-empresas',
  templateUrl: 'gestion-empresas.html',
})
export class GestionEmpresasPage {

  idSelected:any; //Esta variable se cargará cuando elijamos una fruta, así controlamos si es una fruta nueva o para actualizar
  show:boolean; //Esta variable contralará cuando queremos que se muestren los campos para introducir o actualizar una fruta
  empresas = []; //Array donde cargaremos las frutas que hay en la base de datos y las mostraremos en nuestra page
  empresa = {id:0, nombre:null, nit:null, direccion:null, telefono:null}; //Declaramos un objeto vacio de fruta

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public empresasService:EmpresasService) {
    this.show = false; //Inicializamos la variable a false, para que por defecto no se muestren los campos
    this.idSelected = 0; // Inicializamos a 0 idselected, que significará que no tenemos ninguna fruta existente selecionada.

    empresasService.getEmpresas()
      .subscribe(empresas=>{
        this.empresas = empresas;
      });//Hacemos una llamada a nuestro servicio, al metodo getFruits y nos devolvera toda la fruta que hay en nuestr abase de datos
        // y las cargaremos en nuestro array
  }

  saveEmpresa(){
    if(this.idSelected != 0){//si es diferente a 0 actualizamos, sino creamos uno nuevo
      this.empresasService.updateEmpresa(this.empresa);
    }else{
      this.empresasService.saveEmpresa(this.empresa);
    }
    this.clear();
  }
  selectEmpresa(id){ //selecionamos una fruta y mostramos los campos
    this.content.scrollToTop();
    this.show = true;
    this.idSelected = id;//cogemos su id

    let receivedEmpresa:any; //declaramos un objeto vacio que será el que reciba la información de la fruta que seleccionamos

    this.empresasService.getEmpresa(id)//hacemos uso de la funcion getfruit de nuestro servicio
    .subscribe(empresa=>{
      receivedEmpresa = empresa;//el objeto vacio recibe la variable
      this.empresa = receivedEmpresa;//Y se lo asignamos al objeto fruta los valores que se han retornado del servicio
    });
  }
  removeSelectedEmpresa(){
    //Llamamos a la funcion removeFruit de nuestro servicio, le pasamos el idselected y se borra esa fruta
    this.empresasService.removeEmpresa(this.idSelected);
    this.clear();
  }
  clear(){
    this.content.scrollToTop();
    this.show = false;
    this.idSelected = 0; 
     
    /**Datos empresa */
    this.empresa.id = null;
    this.empresa.nombre = null;
    this.empresa.nit = null;
    this.empresa.direccion = null;
    this.empresa.telefono = null;
  }


}
