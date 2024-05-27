import { brotliCompress } from "zlib";
import moment from 'moment'
const code = {
    notEmpty:(value)=>{
        return (value && value !== '');
     }
}

const firstname = {
    notEmpty:(value) => {
        return (value && value !== '');
    }
}

const surname = {
    notEmpty:(value) => {
        return (value && value !== '');
    }
}

const password = {
    notEmpty:(pwd)=>{
       return pwd;
    },
    charLength:(pwd) =>{
        return ( pwd.length >= 8 );
    },
    lowercase:(pwd) =>{
        var regex = /^(?=.*[a-z]).+$/; // Lowercase character pattern
        return regex.test(pwd);
    },
    uppercase: (pwd) => {
        var regex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern
        return regex.test(pwd)
    },
    number: (pwd) =>{
        return pwd.match(/[0-9]/g);
    },
    special: (pwd) =>{
        var regex = /^(?=.*[0-9_\W]).+$/; // Special character or number pattern
        return regex.test(pwd);
    }   
};

const birthDay = {
    notEmpty: (value) =>{
        return (value && value !== '');
    },
    validFormat: (value)=>{
        //accept 31/12/2000 or 32-12-2000
        const regex =/^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/
        return regex.test(value);
    },
    validDate: (value)=>{
        var aDate1 = value.split('/');
        let diff = moment().year() - aDate1[2];
        console.log(diff)
        let dateStr = aDate1[1] + '/' + aDate1[0] + '/' + aDate1[2]
        let sDate = new Date(dateStr);
        if(moment(sDate).format("MM/DD/YYYY") == 'Invalid date'){
            return false;
        }else{
            return true;
        }
    },
    inDateRange: (value)=>{
       var aDate1 = value.split('/');
       let birthdateStr = aDate1[1] + '/' + aDate1[0] + '/' + aDate1[2]
       let birthDate = moment(birthdateStr);
       
       let age = moment().diff(birthDate,"years")
       console.log("age:" + age);
       if (age > 100){
         return false
       }else{
         return true;
       }
       
    }
}

const shopPref = {
    notEmpty: (value) => {
        return (value && value !== '');
    }
}
const validate_field = (name,value) =>{
    
    switch(name){
        case "CODE":
            let isCodeValid = code.notEmpty(value)
            if(!isCodeValid){return ['CODE -> required']} else { return []}
            break;
        case "FIRSTNAME":
            let isFirstnameValid = firstname.notEmpty(value)
            if(!isFirstnameValid){return ['FIRST NAME -> required']} else { return []}
            break;
        case "SURNAME":
            let isSurnameValid = surname.notEmpty(value)
            if(!isSurnameValid){return ['SURNAME -> required']} else { return []}
            break;
        case "PASSWORD":
            //let valid = password.notEmpty(value)
            let isPwdValid = password.notEmpty(value) && password.charLength(value) && password.lowercase(value) && password.uppercase(value) && password.number(value)
            if(!isPwdValid){
                return ['PASSWORD','-> required','-> X Minimum of 8 character','-> X Uppercase,lowercase and one number'];
            }else{
                return [];
            }
        case "DOB":
           
            if(!birthDay.notEmpty(value)){
                return ['DATE OF BIRTH -> required'];
            }
            if(!birthDay.validFormat(value)){
                return ['DATE OF BIRTH -> "DD/MM/YYYY" format required'];
            }
            //let valid = moment(value).format('DD/MM/YYYY')
            
            if (!birthDay.validDate(value)){
                return ['DATE OF BIRTH -> "Invalid date'];
            }

            if (!birthDay.inDateRange(value)){
                return ['DATE OF BIRTH -> Too old'];
            }

            return [];
            
        case "shopPref":
            let isShopPrefValid = shopPref.notEmpty(value)
            
            if(!isShopPrefValid){
                return ['Required'];
            }else{
                return [];
            }
        default: 
            return [];
        
            
    }

}

export default validate_field;