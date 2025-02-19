
function calculateWatchTime(times) {
  
  if (!Array.isArray(times) || times.some(time => typeof time !== 'number')) {  
   
   return  "invalid";
  }
  

 { let totalSeconds = times.reduce((total, time) => total + time, 0);
  
 
  let hours = Math.floor(totalSeconds / 3600); 
  totalSeconds %= 3600; 

  let minutes = Math.floor(totalSeconds / 60); 
  let seconds = totalSeconds % 60; 

  
  return {
    hour: hours,
    minute: minutes,
    second: seconds
  }
  
  }
  
}



const total = calculateWatchTime([]);
console.log(total);  
