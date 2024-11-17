interface ICountry {
    id: number;
    name: string;
    picture: string;
    charges: string;
}

class CountryService{
    async getAllCountry():Promise<ICountry>{
        return fetch('country.json',{headers: {  
                    Accept: "application/json"  
            }  })
               .then(response => {return response.json()})
               .catch(error => {
                    console.log("Fetch rrror:" + error)
                    throw error;

               }) 
    }
}

export default CountryService;