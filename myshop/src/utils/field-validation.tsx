import { brotliCompress } from "zlib";
import moment from 'moment'
const code = {
    notEmpty:(code)=>{
        return (code && code !== '');
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
        const regex = /^\d{2}(\/)\d{2}(\/)\d{4}$/;
        return regex.test(value);
    },
    validDate: (value)=>{
        return true;
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
            if(!isCodeValid){return ['required']} else { return []}
            break;
        case "PASSWORD":
            //let valid = password.notEmpty(value)
            let isPwdValid = password.notEmpty(value) && password.charLength(value) && password.lowercase(value) && password.uppercase(value) && password.number(value)
            if(!isPwdValid){
                return ['Required','X Minimum of 8 character','X Uppercase,lowercase and one number'];
            }else{
                return [];
            }
        case "DOB":

            if(!birthDay.notEmpty(value)){
                return ['DATE OF BIRTH => required'];
            }
            if(!birthDay.validFormat(value)){
                return ['DATE OF BIRTH => "DD/MM/YYYY" format required'];
            }
            let valid = moment(value).format('DD/MM/YYYY')
            
            if (valid==='Invalid date'){
                return ['DATE OF BIRTH => "Invalid date'];
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