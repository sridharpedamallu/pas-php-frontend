import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { ItemMasterComponent } from './components/item-master/item-master.component';
import { StockLineComponent } from './components/stock-line/stock-line.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'vendor', component: VendorComponent},
  {path: 'item-master', component: ItemMasterComponent},
  {path: 'stock-line', component: StockLineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
