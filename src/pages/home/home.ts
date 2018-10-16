import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { TvPage } from '../tv/tv';
import { SmartphonePage } from '../smartphone/smartphone';
import { LamparaPage } from '../lampara/lampara';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
bocina=BocinaPage;
tv = TvPage;
smartphone= SmartphonePage;
lampara = LamparaPage;
  constructor(public navCtrl: NavController) {

  }
clickBocina(){
this.navCtrl.push(this.bocina);
}
clickTV(){
  this.navCtrl.push(this.tv);
}
clickSmartphone(){
  this.navCtrl.push(this.smartphone)
}
clickLampara(){
  this.navCtrl.push(this.lampara)
}
}
