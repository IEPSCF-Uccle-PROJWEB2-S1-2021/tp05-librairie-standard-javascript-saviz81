function analyzeTemperature(quantity, data)
{
 if(quantity>=0 && quantity<=10000)
 {
  if(quantity=0)
  {
      return 0;
  }
  let temp=data.split(" ");
   for(let i=0; i<temp.length;i++)
  {
    if(temp[i]>-273 && temp[i]<5526)
    {
     temp[i]=(Math.abs(temp[i]));
   }
  }
   temp.sort();
   return temp[0];

  }
}
 console.log(analyzeTemperature(5,"1 -2 -8 4 5"));

