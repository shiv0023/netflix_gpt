const Validation = (email, password, name) => {
    const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$!%*?&]{8,}$/.test(password);
    const fullNameValidation = /^[A-Za-z ]{3,64}$/.test(name);
  
    if (!emailValidation) return "Please enter a valid email address";
    if (!passwordValidation) return "Please enter a strong password";
    if (!fullNameValidation) return "Please enter a valid full name";
  
    return null;
  };
  
  export default Validation;
  