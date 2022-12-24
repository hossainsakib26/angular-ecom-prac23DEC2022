import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnComComponent } from './ui_components/btn-com/btn-com.component';
import { MyInputComponent } from './ui_components/my-input/my-input.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnComComponent,
    MyInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
