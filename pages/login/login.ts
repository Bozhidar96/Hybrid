import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';

import { Page1 } from '../../pages/page1/page1';
import { ForgottenPasswordPage } from '../../pages/forgotten-password/forgotten-password';
import { AuthService } from '../../providers/auth-service';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;
  registerCredentials = {email: '', password: ''};
  constructor(public navCtrl: NavController,  public auth: AuthService, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {}

 public login(){
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if(allowed){
        setTimeout(() => {
          this.loading.dismiss();
          this.navCtrl.setRoot(Page1);
        });
      }else{
        this.showError("Access Denied");
      }//end else
    },
    error => {
      this.showError(error);
    
    });
  }//end login
  
  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }//end showLoading

  showError(text){
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }//end showError 



  logUser(){
    this.navCtrl.push(Page1);
  }

  forgotPass(){
    this.navCtrl.push(ForgottenPasswordPage);
  }

}