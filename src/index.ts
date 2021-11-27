import { ConfigurationOptions } from "./dtos/ConfigurationOptions.dto";
import { base64encode } from 'nodejs-base64'
import { Inbound } from "./lib";
export default class ThinQ {
  private accountId: string
  private encodedToken: string

  public inbound: Inbound

  constructor (options: ConfigurationOptions) {
    this.accountId = options.accountId

    if (options.encodedToken) {
      this.encodedToken = options.encodedToken
    } else if (options.username && options.token) {
      this.encodedToken = <string>base64encode(`${options.username}:${options.token}`)
    } else {
      const error = new Error('Invalid Authentication Options')
      throw error
    }

    // Initialize classes
    this.inbound = new Inbound(this.accountId, this.encodedToken)
  }
}

export * as ThinQTypes from './classes'