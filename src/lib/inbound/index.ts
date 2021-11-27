import { Sites } from "./e911";
import { ExistingDids } from "./searching";

export class e911 {
  public sites: Sites

  constructor (accountId: string, encodedToken: string) {
    this.sites = new Sites(accountId, encodedToken)
  }
}

export class Searching {
  public existingDids: ExistingDids

  constructor (accountId: string, encodedToken: string) {
    this.existingDids = new ExistingDids(accountId, encodedToken)
  }
}