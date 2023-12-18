import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App1SharedModule } from 'projects/application1/src/app/app.module';
import { App2SharedModule } from 'projects/application2/src/app/app.module';
// import { AppModule as AppMaterialSharedModule } from 'projects/demo-material/src/app/app.module';
import { LibBeehiveUiSharedModule } from 'projects/lib-beehive-ui-shared/src/public-api';
import { NavComponent } from './nav/nav.component';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot(),
    LibBeehiveUiSharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
