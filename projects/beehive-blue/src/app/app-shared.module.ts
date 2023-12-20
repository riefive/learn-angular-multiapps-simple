import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingChildModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibBeehiveUiSharedModule } from 'projects/lib-beehive-ui-shared/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingChildModule,
    LibBeehiveUiSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
