function clickMyDonation(id){
   const input=document.getElementById(id).value;
   const inputNumber=parseFloat(input)
   return inputNumber;                          
} 

function addedMyDonation(id){
   const myMoney=document.getElementById(id).innerText;
   const moneyNumber=parseFloat(myMoney)
   return moneyNumber;                          
}