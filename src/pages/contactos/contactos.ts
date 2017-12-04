import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetallePage } from '../detalle/detalle';

@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html'
})
export class ContactosPage {

  constructor(public navCtrl: NavController) {
  }
  goToDetalle(params){
    if (!params) params = {};
    this.navCtrl.push(DetallePage);
  }
}
