
class IPAddress{
    country: string;
    code: string;
    region: string;
    city: string;
    constructor(country:string,code:string,region: string,city:string){
        this.country = country;
        this.code = code;
        this.region = region;
        this.city=city;
    }
}
const formatIPAddress = (ipaddr: any): IPAddress =>{
    return { country:ipaddr.country_name, code: ipaddr.country_code ,region: ipaddr.region, city: ipaddr.city};
  }
  
class IPAddressService{
    getIPAddress():Promise<any>{
        return fetch(`https://ipapi.co/json/`)
               .then(response =>{
                    if(!response.ok){
                        throw Error(`HTTP error: ${response.status}`);
                    }
                    return response.json();
                })
               .then(data => formatIPAddress(data))
               .catch(error => {
                    console.log("Fetch rrror:" + error)
                    throw error;

               }) 
    }
}

export default IPAddressService;