import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { BuildingsEstatesPage } from '../buildings-estates/buildings-estates';


@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }
   nextPageBuildEst(){
      this.navCtrl.push(BuildingsEstatesPage);
    }

}
