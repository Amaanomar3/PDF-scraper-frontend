import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ImgUploadComponent } from './img-upload/img-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ImgUploadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
