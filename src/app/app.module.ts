import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/admin/components/dashboard/dashboard.component';
import { RolesComponent } from './modules/admin/components/roles/roles.component';
import { PermissionsComponent } from './modules/admin/components/permissions/permissions.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegistrationComponent } from './modules/auth/registration/registration.component';
import { SidePanelComponent } from './modules/admin/pages/side-panel/side-panel.component';
import { AdminHeaderComponent } from './modules/admin/pages/admin-header/admin-header.component';
import { AdminFooterComponent } from './modules/admin/pages/admin-footer/admin-footer.component';
import { AdminComponent } from './modules/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RolesComponent,
    PermissionsComponent,
    LoginComponent,
    RegistrationComponent,
    SidePanelComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
