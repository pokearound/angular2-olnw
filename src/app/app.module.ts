import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppAboutComponent } from "app/app.about.component";
import { AppHomeComponent } from "app/app.home.component";
import { AppDefaultComponent } from "app/app.default.component";
import { PageNotFoundComponent } from "app/app.pnf.component";
import { OpenLinkInNewWindowDirective } from "app/olinw.directive";

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: AppDefaultComponent },
  { path: 'home', component: AppHomeComponent },
  { path: 'about', component: AppAboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, AppHomeComponent, AppAboutComponent, AppDefaultComponent, PageNotFoundComponent, OpenLinkInNewWindowDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
