import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChangePasswordPage } from '../../pages/change-password/change-password';
import { Page2 } from '../../pages/page2/page2';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
 
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { 
   
  }
   changePass(){
     this.navCtrl.push(ChangePasswordPage);
   }

   nextPage(){
     this.navCtrl.push(Page2);
   }
  
}

