import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';

const routes: Routes = [
  { path: "Dashboard", component: AdminComponent },
  { path: "login", component: AdminComponent },
  { path: "register", component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
