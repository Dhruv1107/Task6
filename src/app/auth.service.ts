import { Subject } from "rxjs";

export class AuthService {
  public loggedIn = new Subject<boolean>();
  public filteredStatus = new Subject<string>();

  returnLoggedInStatus = () => this.loggedIn.asObservable();

  setLoginStatus(status: boolean) {
    this.loggedIn.next(status);
  }

  returnFilteredStatus = () => this.filteredStatus.asObservable();

  setFilteredStatus(filteredStatus: string) {
    this.filteredStatus.next(filteredStatus);
  }
}
