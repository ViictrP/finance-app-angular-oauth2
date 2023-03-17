import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserService} from '../services/user.service';

@Injectable()
export class UserHttpInterceptor implements HttpInterceptor {

  constructor(private readonly service: UserService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(tap(response => {
        if (response instanceof HttpResponse) {
          const {method} = req;
          const shouldCallUser = method !== 'GET';
          if (shouldCallUser) {
            this.service.loadUserProfile()
              .subscribe(() => console.log('fetching user\'s updated profile...'));
          }
        }
      }));
  }

}
