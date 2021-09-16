import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { LayoutMainComponent } from './layout/layout-main.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    LayoutMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
