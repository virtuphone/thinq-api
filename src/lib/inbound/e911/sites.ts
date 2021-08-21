import { Site } from "@/models"
import axios, { AxiosInstance } from "axios"

export class Sites {
  private accountId: string
  private encodedToken: string
  private api: AxiosInstance

  constructor (accountId: string, encodedToken: string) {
    this.accountId = accountId
    this.encodedToken = encodedToken

    this.api = axios.create({
      baseURL: `https://api.thinq.com/accounts/${this.accountId}/location`
    })
  }

  public async get (siteId: string | number): Promise<Site> {
    const response = await this.api.get(`/${siteId}`);

    if (!response || !response.data) {
      const error = new Error('Invalid Site')
      throw error
    }
    return Site.fromJson(response.data)
  }
}