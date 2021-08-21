import { Sites } from "./e911";

export class e911 {
  public sites: Sites

  constructor (accountId: string, encodedToken: string) {
    this.sites = new Sites(accountId, encodedToken)
  }
}