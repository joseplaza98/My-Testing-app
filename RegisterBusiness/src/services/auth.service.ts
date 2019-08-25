import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {
    constructor(public afDB: AngularFireDatabase,
        public afAuth: AngularFireAuth) {
    }

    Logout(){
        
        return this.afAuth.auth.signOut();
    }
}