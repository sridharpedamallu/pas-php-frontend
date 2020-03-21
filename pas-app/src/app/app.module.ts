import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CustomerComponent } from './components/customer/customer.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { ItemMasterComponent } from './components/item-master/item-master.component';
import { StockLineComponent } from './components/stock-line/stock-line.component';
import { AssetComponent } from './components/asset/asset.component';
import { CountryComponent } from './components/shared/country/country.component';
import { CustomerAccountTypeComponent } from './components/shared/customer-account-type/customer-account-type.component';
import { CustomerClassificationComponent } from './components/shared/customer-classification/customer-classification.component';
import { CustomerIntegrationComponent } from './components/shared/customer-integration/customer-integration.component';
import { CustomerGeneralInfoComponent } from './components/customer/customer-general-info/customer-general-info.component';
import { CustomerContactsComponent } from './components/customer/customer-contacts/customer-contacts.component';
import { CustomerContactAddEditComponent } from './components/customer/customer-contacts/customer-contact-add-edit/customer-contact-add-edit.component';
import { CustomerContactAtaChaptersComponent } from './components/customer/customer-contacts/customer-contact-ata-chapters/customer-contact-ata-chapters.component';
import { CustomerContactViewComponent } from './components/customer/customer-contacts/customer-contact-view/customer-contact-view.component';
import { TopnavComponent } from './layout/topnav.component';
import { LeftnavComponent } from './layout/leftnav.component';
import { ThemeSettingsComponent } from './layout/theme-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    EmployeeComponent,
    CustomerComponent,
    VendorComponent,
    ItemMasterComponent,
    StockLineComponent,
    AssetComponent,
    CountryComponent,
    CustomerAccountTypeComponent,
    CustomerClassificationComponent,
    CustomerIntegrationComponent,
    CustomerGeneralInfoComponent,
    CustomerContactsComponent,
    CustomerContactAddEditComponent,
    CustomerContactAtaChaptersComponent,
    CustomerContactViewComponent,
    TopnavComponent,
    LeftnavComponent,
    ThemeSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
