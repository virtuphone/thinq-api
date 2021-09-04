export class Location {
  id?: number
  location_type: 'business' | 'residential'
  alias: string
  address: string
  address2: string | null
  city: string
  state: string
  zip: string
  country: string

  constructor ({
    id,
    location_type,
    alias,
    address,
    address2,
    city,
    state,
    zip,
    country,
  }: Location) {
    this.id = id
    this.location_type = location_type
    this.alias = alias
    this.address = address
    this.address2 = address2
    this.city = city
    this.state = state
    this.zip = zip
    this.country = country
  }

  public static fromJson(location: any): Location {
    return new Location({
      id: location.id,
      location_type: location.location_type,
      alias: location.alias,
      address: location.address,
      address2: location.address2,
      city: location.city,
      state: location.state,
      zip: location.zip,
      country: location.country,
    })
  }
}

export default Location