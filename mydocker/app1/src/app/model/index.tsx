/**
 * @$id customerInfo#
 */
export interface CustomerInfo{
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    mobile: string
}
export interface Order{
    customerInfo:CustomerInfo
}