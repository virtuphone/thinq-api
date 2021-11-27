import { e911, Searching } from "./inbound";

export class Inbound {
  public e911: e911
  public searching: Searching

  constructor (accountId: string, encodedToken: string) {
    this.e911 = new e911(accountId, encodedToken)
    this.searching = new Searching(accountId, encodedToken)
  }
}