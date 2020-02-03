# Ng2ApiCounter

You can use the Loader Service to get count of all ongoing api with this simple add on package.

#### In component
`
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from 'api-count';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient, private _loaderService: LoaderService) {
  }

`

#### In App module provide the ApiCounterModule
`import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiCountModule } from 'api-count';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApiCountModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`

##### Feel free to ask any doubts if you have any