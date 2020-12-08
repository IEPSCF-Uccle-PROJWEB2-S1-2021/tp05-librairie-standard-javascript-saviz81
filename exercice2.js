function analyzeTemperature(quantity, data)
{
  if(quantity=0)
  {
      return 0;
  }
 if(quantity>0 && quantity<=10000)
 {

  let temp=data.split(" ");
  let temp2=[];
  let j=0;
   for(let i=0; i<temp.length;i++)
  {
    if(temp[i]>=-273 && temp[i]<=5526)
    {
     temp2[j]=(Math.abs(temp[i]));
     j++;
   }
  }
   temp2.sort();
   return temp2[0];

  }
}
 console.log(analyzeTemperature(5,"1 -2 -8 4 5"));

