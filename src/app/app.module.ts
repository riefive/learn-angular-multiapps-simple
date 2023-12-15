import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App1SharedModule } from 'projects/application1/src/app/app.module';
import { App2SharedModule } from 'projects/application2/src/app/app.module';
import { LibBeehiveUiSharedModule } from 'projects/lib-beehive-ui-shared/src/public-api';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot(),
    LibBeehiveUiSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
