
import React,{useEffect,useState} from 'react';

import * as styles1 from './assets/css/app1.module.css'
import getAllCollection from './services/mycollection';
import CountryService from './services/country';
import countries from './services/country.json'
import all from './services/request';
import DateTime from './utils/datetimes';
import img from './assets/images/photo2.jpg';
const App = ({title}) => {
  const api = new CountryService()
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
    getAllCollection().then(data => {
      console.log('Data:', data);
    }).catch(error => {
      console.error('Error:', error);
    });
    all().then(data1 =>{
      console.log('Data1:', data1);
    }).catch(error =>{
      console.error('Error:', error);
    })
    getCountryList()
  },[])

 
 
  return (
  <div>
    <DateTime/>
    <div className={styles1.color}>Verdana</div>
    {countryList.map(s =>(
      <div className={styles1.color}>{s}</div>
    ))}
     <img id="img2" src='/assets/images/photo2.jpg'/>
     
  </div>
  );
};

export default App;