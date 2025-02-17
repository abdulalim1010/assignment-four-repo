/*function signature/sample */
function  validEmail( email ) {
          
  const startTime = /^[.-_+@]/;
  if (startTime.test(email)) {
    return false;
  }
  else if (!email.includes('@')) {
    return false;
  }
  else if (email.includes(' '))
  { return false; }
  else if (!email.includes('.com')) {
    false
  }

  return true;

}


const output = validEmail('.lainmffmgmal.com')

console.log(output)