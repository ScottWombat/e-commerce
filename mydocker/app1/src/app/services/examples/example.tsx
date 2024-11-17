type Payload = {
    id: number
}

type ReturnType = number

export const functionThatHasNumberType = async (
    payload: Payload
): Promise<ReturnType> => {
    let url = `/api/${payload.id}`
  
    //return await fetch(url)
    return 1
}

function fetchData() {
    return new Promise((resolve, reject) => {
      fetch('https://api.example.com/data')
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Error fetching data');
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  
  fetchData().then(data => {
    console.log('Data:', data);
  }).catch(error => {
    console.error('Error:', error);
  });