import { ConfigurationOptions } from "./dtos/ConfigurationOptions.dto";
import { base64encode } from 'nodejs-base64'
export default class ThinQ {
  private encodedToken: string

  constructor (options: ConfigurationOptions) {
    if (options.encodedToken) {
      this.encodedToken = options.encodedToken
    } else if (options.username && options.token) {
      this.encodedToken = <string>base64encode(`${options.username}:${options.token}`)
    } else {
      const error = new Error('Invalid Authentication Options')
      throw error
    }

    console.log(`ThinQ Token: ${this.encodedToken}`)
  }
}