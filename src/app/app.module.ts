import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ComunidadPage } from '../pages/comunidad/comunidad';
import { DatosPage } from '../pages/datos/datos';
import { ContactosPage } from '../pages/contactos/contactos';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AlertasPage } from '../pages/alertas/alertas';
import { PerfilPage } from '../pages/perfil/perfil';
import { CerrarPage } from '../pages/cerrar/cerrar';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { DetallePage } from '../pages/detalle/detalle';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    ComunidadPage,
    DatosPage,
    ContactosPage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    AlertasPage,
    PerfilPage,
    CerrarPage,
    AyudaPage,
    DetallePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ComunidadPage,
    DatosPage,
    ContactosPage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    AlertasPage,
    PerfilPage,
    CerrarPage,
    AyudaPage,
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}