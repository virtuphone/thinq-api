import axios, { AxiosInstance } from "axios"
import Location from "../../../classes/location.class"

export class Sites {
  private _accountId: string
  private _encodedToken: string
  private _api: AxiosInstance

  constructor (accountId: string, encodedToken: string) {
    this._accountId = accountId
    this._encodedToken = encodedToken

    this._api = axios.create({
      baseURL: `https://api.thinq.com/account/${this._accountId}/location`,
      headers: {
        Authorization: `Basic ${encodedToken}`
      }
    })
  }

  public async create (location: Location): Promise<Location> {
    try {
      const newSite = {
        account_id: this._accountId,
        location,
      }
      const response = await this._api.post(`/`, newSite);

      if (!response || !response.data) {
        const error = new Error('Invalid Site')
        throw error
      }
      return Location.fromJson(response.data)
    } catch (err) {
      throw err
    }
  }

  public async delete (id: string | number): Promise<void> {
    try {
      const response = await this._api.delete(`/${id}`);
    } catch (err) {
      throw err
    }
  }

  public async get (id: string | number): Promise<Location> {
    try {
      const response = await this._api.get(`/${id}`);

      if (!response || !response.data) {
        const error = new Error('Invalid Site')
        throw error
      }
      return Location.fromJson(response.data)
    } catch (err) {
      throw err
    }
  }

  public async update (id: string | number, location: Location): Promise<Location> {
    try {
      const siteUpdate = {
        account_id: this._accountId,
        location_id: id,
        location,
      }
      const response = await this._api.put(`/${id}`, siteUpdate);

      if (!response || !response.data) {
        const error = new Error('Invalid Site')
        throw error
      }
      return Location.fromJson(response.data)
    } catch (err) {
      throw err
    }
  }
}