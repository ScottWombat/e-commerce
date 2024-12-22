export const fieldValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === "") {
      return `${fieldName} is required`;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
      return "Invalid characters";
    }
    if (fieldValue.trim().length < 3) {
      return `${fieldName} needs to be at least three characters`;
    }
    return null;
  };

  export const emailValidation = email => {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return null;
    }
    if (email.trim() === "") {
      return "Email is required";
    }
    return "Please enter a valid email";
  };
  