import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


/**Sesión usuario*/
import { HttpModule } from '@angular/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { LoginPage } from '../pages/Sesión/login/login';
import { RegisterPage } from '../pages/Sesión/register/register';

/**My Testing app */
/**Gestion Empresas */
import { GestionEmpresasPage } from '../pages/My Testing/Empresas/gestion-empresas/gestion-empresas';

/**Aplicacion de test */
import { SelecTestPage } from '../pages/My Testing/Metodo de evaluacion/selec-test/selec-test';
import { Test1Page } from '../pages/My Testing/Metodo de evaluacion/Test 1/test1/test1';
import { Test2Page } from '../pages/My Testing/Metodo de evaluacion/Test 2/test2/test2';
import { Test3Page } from '../pages/My Testing/Metodo de evaluacion/Test 3/test3/test3';

/**Analisis de datos */
import { ResultadosPage } from '../pages/My Testing/Metodo de evaluacion/Analisis de datos/resultados/resultados';

/**Derechos y autoria */
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

/**proveedores CRUD */
import { LsProvePage } from '../pages/InfoProveedores/ls-prove/ls-prove';
import { ModProvePage } from '../pages/InfoProveedores/mod-prove/mod-prove';
import { RegProvePage } from '../pages/InfoProveedores/reg-prove/reg-prove';
import { RegistroProveedorPage } from '../pages/InfoProveedores/registro-proveedor/registro-proveedor';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmpresasService } from '../services/empresas.service';
import { FruitsService } from '../services/fruits.service';


export const firebaseConfig = {
  apiKey: "AIzaSyCF1mzBCuO2QpxwtYaWTZUzmnRW6FkfP9k",
  authDomain: "my-testing-1dffb.firebaseapp.com",
  databaseURL: "https://my-testing-1dffb.firebaseio.com",
  projectId: "my-testing-1dffb",
  storageBucket: "",
  messagingSenderId: "179671640971",
  appId: "1:179671640971:web:f192c64dfcabd5a5"
};

@NgModule({
  declarations: [
    MyApp,

    /**Derechos de uso */
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    RegisterPage,
    TabsPage,

    /**proveedores CRUD */
    LsProvePage,
    ModProvePage,
    RegProvePage,
    RegistroProveedorPage,

    /**My Testing app */
    /**Gestion Empresas */
    GestionEmpresasPage,

    /**Aplicacion de test */
    SelecTestPage,
    Test1Page,
    Test2Page,
    Test3Page,

    /**Analisis de datos */
    ResultadosPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    /**Derechos de uso */
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    RegisterPage,
    TabsPage,

    /**proveedores CRUD */
    LsProvePage,
    ModProvePage,
    RegProvePage,
    RegistroProveedorPage,

    /**My Testing app */
    /**Gestion Empresas */
    GestionEmpresasPage,

    /**Aplicacion de test */
    SelecTestPage,
    Test1Page,
    Test2Page,
    Test3Page,

    /**Analisis de datos */
    ResultadosPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    FruitsService,
    EmpresasService,
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService
  ]
})
export class AppModule { }
