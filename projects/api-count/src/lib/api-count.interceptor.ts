import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError, timeout } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable({
    providedIn: 'root'
})

export class ApiCountInterceptor {
    constructor(private router: Router, private injector: Injector) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loaderService = this.injector.get(LoaderService);

        let cloneChanges: any = {};

        //Modify Request
        const authReq = req.clone(cloneChanges)

        loaderService.addAPI();

        return next.handle(authReq).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    loaderService.removeAPI();
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                loaderService.removeAPI();
                return throwError(error);
            }));
    }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: ApiCountInterceptor, multi: true },
];
