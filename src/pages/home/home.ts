import { StatusPage } from './../status/status';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ir(){
    this.navCtrl.push(StatusPage);
    // this.navCtrl.push('status');//
  }
}
