import countries from './countries.json';
let country_list: string[]=[]
for (let item in countries) {
    //console.log(item);
    country_list.push(countries[item]['Name']);
}
export default country_list;