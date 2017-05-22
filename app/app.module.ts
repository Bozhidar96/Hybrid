import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Auth } from '../providers/auth';


import { LoaderPage } from '../pages/loader/loader';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { BuildingsEstatesPage } from '../pages/buildings-estates/buildings-estates';
import { ChangePasswordPage } from  '../pages/change-password/change-password';
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


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    ProfilePage,
    SettingsPage,
    BuildingsEstatesPage,
    ChangePasswordPage,
    LoginPage,
    ForgottenPasswordPage,
    BuildingsEstatedetailFilteredPage,
    DashboarPayobligaionPage,
    DashboardPaysuccessPage,
    BuildingsEstateDetailPage,
    BuildingsEstateDetailBasicInfoPage,
    BuildingsEstateDetailFilterPage,
    BuildinsLocaionPage,
    DashboardLoadingApiPage,
    LoaderPage,
    NoInternetConnectonPage
   
   
   
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    ProfilePage,
    SettingsPage,
    BuildingsEstatesPage,
    ChangePasswordPage,
    LoginPage,
    ForgottenPasswordPage,
    BuildingsEstatedetailFilteredPage,
    DashboarPayobligaionPage,
    DashboardPaysuccessPage,
    BuildingsEstateDetailPage,
    BuildingsEstateDetailBasicInfoPage,
    BuildingsEstateDetailFilterPage,
    BuildinsLocaionPage,
    DashboardLoadingApiPage,
    LoaderPage,
    NoInternetConnectonPage
  
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Auth]
})
export class AppModule {}
