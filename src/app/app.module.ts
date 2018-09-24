import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatSidenavModule,MatIconModule,MatToolbarModule,MatListModule, MatFormFieldModule,MatInputModule,
  MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CourtShareComponent } from './court-share/court-share.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContributorsComponent } from './contributors/contributors.component';
@NgModule({
  declarations: [
    AppComponent,
    CourtShareComponent,
    DashboardComponent,
    NotFoundComponent,
    ContributorsComponent
  ],
  imports: [
    MatNativeDateModule, 
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);