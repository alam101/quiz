import { createStore, select, withProps } from '@ngneat/elf';
import { Injectable } from '@angular/core';
import { Session } from './session.interface';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';

interface SessionState {
  session: Session | undefined;
}

const initialState: any = {
  session: {
   // accessToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibmF2YWlkIiwiZW1haWwiOiJuYXZhaWQucmF6YTEwMUBnbWFpbC5jb20iLCJtb2JpbGUiOiI5OTU4NDY5ODM0IiwiZG9iIjoiMTQtbm92LTIwMTIiLCJjbGFzcyI6IjZ0aCIsInBob3RvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjpbNzgsNjVdfSwiaWF0IjoxNzIwNTAwNzc3LCJleHAiOjE3MjA1MDQzNzd9.BLhOV61JYTlDIpe44glm3-H_nJBzHxGHRTHZRaCJg9s',
    accessToken: '',
    tokenType:'Bearer'
  }
};

const store = createStore({ name: 'session' }, withProps<any>({accessToken:sessionStorage.getItem("token"),tokenType:'Bearer'}));

export const persist = persistState(store, {
  key: 'session',
  storage: localStorageStrategy,
});

@Injectable({ providedIn: 'root' })
export class SessionRepository {
  isLoggedIn$ = sessionStorage.getItem("token");

  session$ = store.pipe(select((state) => state.session));

  isLoggedIn(): boolean {
    console.log("store.getValue().session?.accessToken", sessionStorage.getItem("token"));
    
    return Boolean(sessionStorage.getItem("token"));
  }

  session(): any {
      return {accessToken:sessionStorage.getItem("token"),tokenType:'Bearer'};
  }

  update(session: any) {
    
    store.update((state) => ({ ...state, ...session }));
    console.log("session",session);
    sessionStorage.setItem("token",session.accessToken)
  }
}
