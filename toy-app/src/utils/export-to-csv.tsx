import { saveAs } from 'file-saver';
export const RetrieveWorldCities = async () =>{
    const jsonObject:any =[]
    fetch(`https://countriesnow.space/api/v0.1/countries/states`)
        .then(response => response.json())
        .then(json => {
            json.data.forEach((e:any)=>{
                //console.log(e.name)
                let states:any = []
                e.states.forEach((s:any)=>{
                    states.push(s.name)
                })
                jsonObject.push({'name':e.name,'states': states})
            })
    })
    console.log(jsonObject)
    const file = new Blob([JSON.stringify(jsonObject)], { type: 'application/json' });
    saveAs(file, 'states.json');
}


export const ExportDataToFile = async () =>{
   
        let countryList: string[]= [];
        let countries =''
        fetch(`http://localhost:5000/api/countries/all_countries`)
        .then(response => response.json())
        .then(json => {
            console.log(json[0]['data'])
            //var keys = Object.keys(json);
            //keys.forEach((k)=>{
            //    countryList.push(k+`\n`);
            //    //countries = countries + k + `\n`
            //})
            //console.log(countries)
           // const file = new Blob(countryList, { type: 'text/plain;charset=utf-8' });
           // saveAs(file, 'hello_world.csv');
        });
    }
         
   

    