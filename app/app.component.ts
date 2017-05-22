import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Auth } from '../providers/auth';
import { LoadingController } from 'ionic-angular';

import { LoaderPage } from '../pages/loader/loader';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { BuildingsEstatesPage } from '../pages/buildings-estates/buildings-estates';
import { ChangePasswordPage  } from  '../pages/change-password/change-password';
import { LoginPage } from '../pages/login/login';
import { ForgottenPasswordPage } from '../pages/forgotten-password/forgotten-password';
import { BuildingsEstatedetailFilteredPage } from '../pages/buildings-estatedetail-filtered/buildings-estatedetail-filtered';
import { DashboarPayobligaionPage } from '../pages/dashboard-payobligaion/dashboar-payobligaion';
import { DashboardPaysuccessPage } from '../pages/dashboard-paysuccess/dashboard-paysuccess';
import { BuildingsEstateDetailPage } from '../pages/buildings-estate-detail/buildings-estate-detail';
import { BuildingsEstateDetailBasicInfoPage } from '../pages/buildings-estate-detail-basic-info/buildings-estate-detail-basic-info';
import { BuildingsEstateDetailFilterPage } from '../pages/buildings-estate-detail-filter/buildings-estate-detail-filter';
import { BuildinsLocaionPage } from '../pages/buildins-locaion/buildins-locaion';
import { DashboardLoadingApiPage } from '../pages/dashboard-loading-api/dashboard-loading-api';
import { NoInternetConnectonPage } from '../pages/no-internet-connecton/no-internet-connecton';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  activePage: any;
 loader: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,public auth: Auth, public loadingCtrl: LoadingController) {

  this.presentLoading();

    this.auth.login().then((isLoggedIn) => {

      if(isLoggedIn){
        this.activePage(Page1)
        }else{
        this.rootPage(DashboarPayobligaionPage);
      }
      this.loader.dismiss();
    })

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboar', component: Page1 },
      { title: 'Buildings', component: Page2 },
      { title: 'Profile', component: ProfilePage },
      { title: 'Settings', component: SettingsPage }
    ];

    this.activePage = this.pages[0];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page;
  
  }
 checkActive(page){
   return page = this.activePage;
 }


  
  presentLoading(){
    this.loader = this.loadingCtrl.create({
      content:"Loading"
    });
    this.loader.present();
  }

}
