import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SessionApiService } from '../../api/session/session-api.service';
import { SessionRepository } from './session.repository';
import { Session } from './session.interface';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(
    private sessionRepository: SessionRepository,
    private sessionApiService: SessionApiService
  ) {}

  async login(accesstoken:String) {
   
  const session = await this.sessionApiService.postLogin(accesstoken);
  debugger;
  session.subscribe(response=>{
    console.log(response);
    this.sessionRepository.update(response);
  })
    //    this.sessionRepository.update({ session. });
  }

  logout() {
    return this.sessionApiService.postLogout().pipe(
      tap(() => {
        this.sessionRepository.update({ session: undefined });
      })
    );
  }
}
