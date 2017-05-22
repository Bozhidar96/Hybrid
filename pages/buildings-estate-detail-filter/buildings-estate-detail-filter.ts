import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the BuildingsEstateDetailFilter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-buildings-estate-detail-filter',
  templateUrl: 'buildings-estate-detail-filter.html'
})
export class BuildingsEstateDetailFilterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingsEstateDetailFilterPage');
  }

}
