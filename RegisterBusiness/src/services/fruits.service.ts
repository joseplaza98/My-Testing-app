import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class FruitsService {

    constructor(public afDB: AngularFireDatabase) {

    }

    public getFruits() {
        return this.afDB.list('fruits/').valueChanges();
        //Esta función devolverá todos los datos que tengamos en el apartado fruits, en nuestra base de datos
    }
    public saveFruit(fruit) {
        let key = this.afDB.list('/fruits/').push(fruit).key;
        //Guardamos la fruta y obetenemos el id que firebase pone al nudulo de nuestra fruta.
        //Al guardarse sin id nuestra fruta, ahora la actualizamos con el id que firebase nos devuelve.
        fruit.id = key;
        this.afDB.database.ref('fruits/' + fruit.id).set(fruit);

    }
    public updateFruit(fruit) {
        //Actualizamos la fruta con el id que recibimos del objeto del parametro
        this.afDB.database.ref('fruits/' + fruit.id).set(fruit);
    }
    public getFruit(id) {
        return this.afDB.object('fruits/' + id).valueChanges();
        //Devolvera la fruta con el id que le pasamos por parametro
    }
    public removeFruit(id) {
        this.afDB.database.ref('fruits/' + id).remove();
        //Borrará la fruta con el id que le pasamos por parametro
    }

}