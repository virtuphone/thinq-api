import axios, { AxiosInstance } from "axios"
import Site from "../../../classes/site.class"

export class Sites {
  private accountId: string
  private encodedToken: string
  private api: AxiosInstance

  constructor (accountId: string, encodedToken: string) {
    this.accountId = accountId
    this.encodedToken = encodedToken

    this.api = axios.create({
      baseURL: `https://api.thinq.com/account/${this.accountId}/location`,
      headers: {
        Authorization: `Basic ${encodedToken}`
      }
    })
  }

  public async get (siteId: string | number): Promise<Site> {
    try {
      const response = await this.api.get(`/${siteId}`);

      if (!response || !response.data) {
        const error = new Error('Invalid Site')
        throw error
      }
      return Site.fromJson(response.data)
    } catch (err) {
      throw err
    }
  }
}