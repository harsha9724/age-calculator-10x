// let date=new Date();
// let month=date.getFullYear();
// console.log(month)

let day_input=document.getElementById("day");
let month_input=document.getElementById("month");
let year_input=document.getElementById("year");
let submit=document.getElementById("submit");
let result=document.getElementById("result")
submit.addEventListener("click",()=>{
 let date=new Date();
 let year=date.getFullYear();
 let month=date.getMonth();
 let day=date.getDay();
 console.log(year,month,day);

 if(isNaN(day_input.value) || day_input.value.length>2 || day_input.value=="" || day_input.value<= 0 || day_input.value>31 ){
   return result.innerText="please provide valid input for date filed"
 }
 else if(isNaN(month_input.value) || month_input.value.length>2 || month_input.value=="" || month_input.value<=0 || month_input.value>12){
   return result.innerText="please provide valid input for month filed"
 } 
 else if(isNaN(year_input.value) || year_input.value.length!=4 || year_input.value==""){
   return result.innerText="please provide valid input for year filed"
 } 
else{
  let years=(year-year_input.value);
  let months=Math.abs(month_input.value-11);
  let days;
  if(month_input==1 || 3 || 5 || 7 || 8 || 10 || 12){
 days=   Math.abs(day_input.value-31)
  }
 else if(month_input==4 || 6 || 9 || 11 ){
    days=Math.abs(day_input.value-30)
  }
 else if(month_input.value==2 && month_input.value%4==0){
    days=Math.abs(day_input.value-29)
  }
  else if(month_input.value==2 && month_input.value%4!=0){
    days=Math.abs(day_input.value-28)
  }
  return result.innerText=`Your Age is ${years} Years ${months} Months ${days} Days.`
}

})