import { Subject } from "rxjs";

export class AuthService {
  public loggedIn = new Subject<boolean>();

  checkLoggedInStatus() {
    return this.loggedIn.asObservable();
  }

  setLoginStatus(status: boolean) {
    this.loggedIn.next(status);
  }
}
