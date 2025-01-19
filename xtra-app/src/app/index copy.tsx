
import React,{useEffect,useState} from 'react';

import countries from './services/country.json'
const App = ({title}) => {
  const [countryData,setCountryData] = useState(countries)
  const [countryList,setCountList] = useState<string[]>([])
  const filterData = (searchTerm) =>{
    const filteredData = countryData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCountryData(filteredData);
  }
  const getCountryList = () =>{
    const list:string[] = []
    countryData.map((item) =>
     list.push(item.name)
    );
    console.log(list)
    setCountList(list)
  }
  useEffect(()=>{
    //filterData("Lexus")
    getCountryList()
  },[])
  return (
  <div>
   
   { countryData && countryData.map(c=>(
    <div key={c.id}>{c.id}:{c.name}:{c.picture}:{c.charges}:</div>
   )

   )}
  </div>
  );
};

export default App;