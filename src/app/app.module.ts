import { AppAboutComponent } from './app.about.component';
import { AppDefaultComponent } from './app.default.component';
import { PageNotFoundComponent } from './app.pnf.component';
import { OpenLinkInNewWindowDirective } from './olinw.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: AppDefaultComponent },
  { path: 'home', component: AppComponent },
  { path: 'about', component: AppAboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, AppAboutComponent, AppDefaultComponent, PageNotFoundComponent, OpenLinkInNewWindowDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
