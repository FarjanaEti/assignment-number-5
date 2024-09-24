function clickMyDonation(id){
   const input=document.getElementById(id).value;
   // const inputNumber=parseFloat(input)
   return input;                          
} 

function addedMyDonation(id){
   const myMoney=document.getElementById(id).innerText;
   const moneyNumber=parseFloat(myMoney)
   return moneyNumber;                          
}

function hiddenAndShow(id){
   document.getElementById('donation').classList.add('hidden')
   document.getElementById('history-list').classList.add('hidden')
  
  document.getElementById(id).classList.remove('hidden')}