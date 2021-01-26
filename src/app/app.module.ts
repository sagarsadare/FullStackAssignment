import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { ItemsComponent } from './items/items.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { routingModule } from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { DndDirective } from './items/dnd.directive';
// import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { DashboardAuthGuard } from './auth/dashboard.auth.guard';
import { LoginAuthGuard } from './auth/login.auth.guard';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SharedModule } from "./shared/shared/shared.module";
import { CustomDropdownComponent } from './shared/custom-dropdown/custom-dropdown.component';
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { SearchDropPipe } from './shared/custom-dropdown/search-drop.pipe';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  DatepickerModule} from 'ngx-bootstrap/datepicker';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    // ItemsComponent,
    // DndDirective,
    RegisterComponent,
    CustomDropdownComponent,
    SearchDropPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-full-width',
      preventDuplicates: true,
      closeButton: true,
      maxOpened: 1,
      autoDismiss: true,
      enableHtml: true
    }),
    BrowserAnimationsModule,
    NgbModule,
    NgbDropdownModule,
    DatepickerModule.forRoot()
    // BsDatepickerModule
    // routingModule
  ], schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [DashboardAuthGuard,LoginAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
