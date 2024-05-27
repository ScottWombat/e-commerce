
export const validateCode =(value) =>{
    //A-12345
    const regex = /[a-zA-z]{1}-\d{5}$/;
    return regex.test(value);
}
