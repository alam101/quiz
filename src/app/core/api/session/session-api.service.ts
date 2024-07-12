import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Session } from '../../state/session/session.interface';

@Injectable({
  providedIn: 'root',
})
export class SessionApiService {
  postLogin(access_token:String): Observable<Session> {
    return of({ accessToken: `${access_token}`, tokenType: 'Bearer' });
  }

  postLogout(): Observable<string> {
    return of('');
  }
}
