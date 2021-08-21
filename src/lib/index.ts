import { e911 } from "./inbound";

export class Inbound {
  public e911: e911

  constructor (accountId: string, encodedToken: string) {
    this.e911 = new e911(accountId, encodedToken)
  }
}