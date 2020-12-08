function analyzeTemperature(quantity, data) {

  if(quantity=0)
  {
      return 0;
  }
  let temp=data.split(" ");
   for(let i=0; i<temp.length;i++)
  {
     temp[i]=(Math.abs(temp[i]));
   }
   temp.sort();
   return temp[0];

  }
 console.log(analyzeTemperature(5,"1 -2 -8 4 5"));

