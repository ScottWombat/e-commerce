export const fieldValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === "") {
      return `${fieldName} is required`;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
      return "*Invalid characters";
    }
    if (fieldValue.trim().length < 3) {
      return `*${fieldName} needs to be at least three characters`;
    }
    return null;
  };

  export const emailValidation = email => {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return null;
    }
    if (email.trim() === "") {
      return "*Email is required";
    }
    return "*Please enter a valid email";
  };

  export const numberValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === "") {
      return `${fieldName} is required`;
    }
    if (/^\d+$/.test(fieldValue)) {
      return null;
    }
    
    return "*Please enter numberic value";;
  };

  export const mobileValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === "") {
      return `${fieldName} is required`;
    } 
    if (/^(()?\d{3}())?(-|\s)?\d{3}(-|\s)?\d{4}$/.test(fieldValue)) {
      return null;
    }
    let msg = `
    * Please enter Mobile value<br/>
    eg. 0403872130 or 040-387-1223
    `
    //return "*Please enter Mobile value \\neg. 04023872987 or 040-387-4321";;
    return msg;
  };
  