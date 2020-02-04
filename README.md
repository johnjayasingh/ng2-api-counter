# Ng2ApiCounter

You can use the Loader Service to get count of all ongoing api with this simple add on package.

# Example

Please checkout the src folder `src/app/app.module.ts` and `src/app/app.component.ts` to find actual implementation of the `ng2-api-count`

## Quick start

1. Add ***ng2-api-count*** to your package.json or install with `npm i ng2-api-count --save`. 
2. Import the `ApiCountModule` into your app.module.ts file. Here's a TypeScript example:
```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiCountModule } from 'ng2-api-count';
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
```
1. Use the `LoaderService` and `apiCount` variable in your component code. The following example displays the supported attributes:
```ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from 'ng2-api-count';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient, private _loaderService: LoaderService) {
  }

  get apiCount() {
    return this._loaderService.apiCount;
  }
}

```


## Feel free to ask any doubts if you have any or raise PR if you want to make changes 