
let friend1 = {
  name: "hasem",
  roll:21,
  bestFriend: 1
}
let friend2 = {
  name: "kasem",
  roll: 1,
  bestFriend:2
}
  


function isBestFriend(friend1, friend2) {
   
  if ( typeof friend1.bestFriend === friend2.roll && friend2.bestFriend === friend1.roll) {
    return true;
  }
  else {
    return false;
  }
    
  }

const result = isBestFriend(friend1, friend2);
console.log(result);
