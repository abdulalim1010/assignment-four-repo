/*function signature/sample */
function cashOut( money ) {
  const charge = money * (1.75 / 100);
  return charge;
}

const charge = cashOut(6000);
console.log(charge);