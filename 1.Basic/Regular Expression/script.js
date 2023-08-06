const Validator = {
  isValidEmail(email) {
    const emailRegex =/^([a-zA-Z0-9.+_-]{2,20})@([a-zA-Z0-9\.\!\$\%\&\’\*\+\/\=\?\^\_\-]{1,16})\.([a-zA-Z]{2,5})$/
    
    return emailRegex.test(email);
  },
  isvalidatePhone(number){
    const numberRegex = /^(\+38)?[\s\-]? ?([(]?(([-\s]?){3}\d){3}[)]?) ?(([\s-]?\d){7})$/
    return numberRegex.test(number);
  },
  isvalidatePassword(password){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])([a-zA-Z0-9\_]{8,})$/
    if(password.length<8){
        return false;
    }else{
        return passwordRegex.test(password);
    }
  } 
};

console.log(Validator.isValidEmail('first-part@.se=cond%p.end'));
console.log(Validator.isValidEmail('f@secondart.end,'));
console.log(Validator.isvalidatePhone('+38 (099) 567 8901'));
console.log(Validator.isvalidatePhone('+38 (0989) 567 8901'));
console.log(Validator.isvalidatePassword('C00l_Pass'))
console.log(Validator.isvalidatePassword('Cool_pass'))
