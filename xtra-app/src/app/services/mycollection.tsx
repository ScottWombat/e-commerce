type Payload = {
    name: string
}

type CollectionType={
    status_code:string,
    data:[]
}
const getCollectionByName = async (payload: Payload): Promise<Response> => {
        
        let url = `http://localhost:5000/api/mycollection/byName/${payload.name}`
      
        return fetch(url)
    
}

const getAllCollection =()=>{

    return new Promise((resolve, reject) => {
        fetch('http://localhost:5000/api/countries/all_countries')
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Error fetching data');
          })
          .then(json => {
            console.log(json[0])
            resolve(json[0]['data'])
          })
          .catch(error => reject(error));
      });
    }     


export default getAllCollection;