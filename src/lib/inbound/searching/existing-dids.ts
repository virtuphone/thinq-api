import axios, { AxiosInstance } from "axios"
import Number from "../../../classes/number.class"

export interface SearchParams {
    page: number | string
    rows: number | string
}
export class ExistingDids {
  private _accountId: string
  private _encodedToken: string
  private _api: AxiosInstance

  constructor (accountId: string, encodedToken: string) {
    this._accountId = accountId
    this._encodedToken = encodedToken

    this._api = axios.create({
      baseURL: `https://api.thinq.com/origination/did/search2/did/${this._accountId}`,
      headers: {
        Authorization: `Basic ${encodedToken}`
      }
    })
  }

  public async getAll (params: SearchParams | null): Promise<Number[]> {
    const { page = 1, rows = 100 } = params || {}
    
    try {
      const response = await this._api.get(`?page=${page}&rows=${rows}`);

      if (!response || !response.data) {
        const error = new Error('Invalid Site')
        throw error
      }

      const result = response.data

      if (result.total_rows === 0) return []

      return result.rows.map(o => Number.fromJson(o))
    } catch (err) {
      throw err
    }
  }

  public async get (id: number | string): Promise<Number | null> {
    try {
      const response = await this._api.get(`?id=${id}`);

      if (!response || !response.data) {
        const error = new Error('Invalid Site')
        throw error
      }

      const result = response.data

      if (result.total_rows !== 1) return null

      return Number.fromJson(result.rows[0])
    } catch (err) {
      throw err
    }
  }
}