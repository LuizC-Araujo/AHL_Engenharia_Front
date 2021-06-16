import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (localStorage.getItem('token') != null) {
      const token = 'Bearer ' + localStorage.getItem('token')

      const tokenRequest = req.clone({
        headers: req.headers.set('Authorization', token)
      });
      return next.handle(tokenRequest)
    } else {
      return next.handle(req)
    }

  }
  constructor() { }
}

@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true,
  },
  ],
})

export class HttpInterceptorModule {

}


