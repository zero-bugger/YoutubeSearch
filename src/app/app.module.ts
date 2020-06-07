import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBoxComponentComponent } from './search-box-component/search-box-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchResultComponent } from './search-result/search-result.component';
import { YoutubesearchComponent } from './youtubesearch/youtubesearch.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponentComponent,
    SearchResultComponent,
    YoutubesearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
