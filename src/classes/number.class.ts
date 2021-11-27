export class Number {
    id?: string
    didSummary: string
    focDate: string
    ported: boolean
    provisioned: boolean
    status: string
  
    constructor ({
      id,
      didSummary,
      focDate,
      ported,
      provisioned,
      status,
    }: Number) {
      this.id = id
      this.didSummary = didSummary
      this.focDate = focDate
      this.ported = ported
      this.provisioned = provisioned
      this.status = status
    }
  
    public static fromJson(number: any): Number {
      return new Number({
        id: number.id,
        didSummary: number.didSummary,
        focDate: number.focDate ?? number.foc_date,
        ported: number.ported || false,
        provisioned: number.provisioned || false,
        status: number.status
      })
    }
  }
  
  export default Number