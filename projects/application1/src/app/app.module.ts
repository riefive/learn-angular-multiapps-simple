import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

const providers: any = [];

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class App1SharedModule{
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppModule,
      providers
    }
  }
}
