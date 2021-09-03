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
      baseURL: `https://api.thinq.com`
    })
  }

  public async get (siteId: string | number): Promise<Site> {
    try {
      console.log('get')
      const response = await this.api.get(`/accounts/${this.accountId}/location/${siteId}`);
      console.log(response)
      return Site.fromJson(response.data)
    } catch (err) {
      throw err
    }
  }
}