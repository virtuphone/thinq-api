export class Site {
  location_type: string
  alias: string
  country: string
  address: string
  address2: string
  state: string
  zip: string
  account_id: number
  id: number
  subscriberId: string
  type: string
  city: string

  constructor ({
    location_type,
    alias,
    country,
    address,
    address2,
    state,
    zip,
    account_id,
    id,
    subscriberId,
    type,
    city,
  }: Site) {
    this.location_type = location_type
    this.alias = alias
    this.country = country
    this.address = address
    this.address2 = address2
    this.state = state
    this.zip = zip
    this.account_id = account_id
    this.id = id
    this.subscriberId = subscriberId
    this.type = type
    this.city = city
  }

  public static fromJson(site: any): Site {
    return new Site({
      location_type: site.location_type,
      alias: site.alias,
      country: site.country,
      address: site.address,
      address2: site.address2,
      state: site.state,
      zip: site.zip,
      account_id: site.account_id,
      id: site.id,
      subscriberId: site.subscriberId,
      type: site.type,
      city: site.city
    })
  }
}