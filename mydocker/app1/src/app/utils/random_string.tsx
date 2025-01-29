import {v4 as uuidv4} from 'uuid';


 const random_string =()=>{
    let uuid = uuidv4().toString();
    let uuid_str =uuid.replace(/-/gi, '');
  
    return (0|Math.random()*9e6).toString(36)
   
}
console.log("DDDDDDDDDDD" + random_string())
export default random_string;