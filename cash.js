/*function signature/sample */
function cashOut(money) {
  
   if (money < 0 || isNaN(money) )
  
   
    {

      return "invalid";
    }
  
  else
 { const charge = money * (1.75 / 100);
  return charge;}
}

const charge = cashOut(2200);
console.log(charge);