import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import {TabsControllerPage} from '../tabs-controller/tabs-controller'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public items : any = [];
  public resultados : any = [];


     // Define FormBuilder /model properties
     public form                   : FormGroup;
     public technologyName         : any;
     public technologyDescription  : any;
     // Flag to be used for checking whether we are adding/editing an entry
     public isEdited               : boolean = false;
     // Flag to hide the form upon successful completion of remote operation
     public hideForm               : boolean = false;
     // Property to help ste the page title
     public pageTitle              : string;
     // Property to store the recordID for when an existing entry is being edited
     public recordID               : any      = null;
     private baseURI               : string  = "http://www.galatea-it.com/app/";
     public user;
     public pass;
  
  constructor(public navCtrl: NavController, public http: Http,public NP : NavParams, public fb: FormBuilder, public toastCtrl  : ToastController) {
  
    this.form = fb.group({
      "login-input1"                  : ["", Validators.required],
      "login-input2"           : ["", Validators.required]
   });
  
   //this.user = NP.get("login-input1");
   //this.pass = NP.get("login-input2");

  }
  goToLogin(params){
    if (!params) params = {};

    let body     : string   = "u=" + this.user + "&p=" + this.pass,
    type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
    headers  : any      = new Headers({ 'Content-Type': type}),
    options  : any      = new RequestOptions({ headers: headers }),
    url      : any      = this.baseURI + "login.php";


this.http.post(url, body, options)
.map(res => res.json())
.subscribe((data) =>
{
   this.items = data;
});

    this.navCtrl.push(TabsControllerPage);
  }
}
