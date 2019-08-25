import {Injectable} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class EmpresasService{
    
    constructor(public afDB: AngularFireDatabase){

    }

    /**Listar Empresas */
    public getEmpresas(){
        return this.afDB.list('empresas/').valueChanges(); 
    }

    /**Guardar empresa con ID de firebase */
    public saveEmpresa(empresa){
        let key = this.afDB.list('/empresas/').push(empresa).key;
        empresa.id = key;
        this.afDB.database.ref('empresas/'+empresa.id).set(empresa);
    }

    /**Actualizar (Modificar) empresa con el Id qie se recibe como parametro */
    public updateEmpresa(empresa){
        this.afDB.database.ref('empresas/'+empresa.id).set(empresa);
    }

    /**Guscar empresa con el Id que se pasa como parametro */
    public getEmpresa(id){
        return this.afDB.object('empresas/'+id).valueChanges();
    }

    /**Eliminar empresa con el Id que se pasa como parametro */
    public removeEmpresa(id){
        this.afDB.database.ref('empresas/'+id).remove();
        //Borrará la fruta con el id que le pasamos por parametro
    }

}