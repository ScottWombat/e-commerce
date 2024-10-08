type CountryResponseType = {
    countries: country[];
    // index-signatures 
    // useful to receive errors if we use res[0].unknowProp
    [key: number]: country;
  }
  
type country = {
    id: number;
    name: string;
}

const all = async (): Promise<CountryResponseType> => {
     return fetch('http://localhost:5000/api/countries/all_countries')
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Error fetching data');
          })
          .then(json => {
            console.log(json[0])
            return (json[0]['data'])
          })
          .catch(error => console.log(error));
}

export default all;
 