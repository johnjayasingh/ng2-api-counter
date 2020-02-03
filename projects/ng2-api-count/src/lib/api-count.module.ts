import { NgModule } from '@angular/core';
import { httpInterceptorProviders } from './api-count.interceptor';



@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [httpInterceptorProviders],
  exports: []
})
export class ApiCountModule { }


