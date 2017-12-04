import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertasPage } from '../alertas/alertas';
import { ComunidadPage } from '../comunidad/comunidad';
import { DatosPage } from '../datos/datos';
import { ContactosPage } from '../contactos/contactos';


@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = ComunidadPage;
  tab2Root: any = DatosPage;
  tab3Root: any = ContactosPage;
  tab4Root: any = AlertasPage;
  constructor(public navCtrl: NavController) {
  }
 
}
