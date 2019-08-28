import { Subject, Observable } from "rxjs";

export class AuthService {
  public loggedIn = new Subject<boolean>();
  public filteredStatus = new Subject<string>();

  returnLoggedInStatus = (): Observable<any> => this.loggedIn.asObservable();

  setLoginStatus(status: boolean): void {
    this.loggedIn.next(status);
  }
}
