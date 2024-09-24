document.getElementById('donation-btn')
.addEventListener('click',function(event){
  event.preventDefault();
  const fieldValues=clickMyDonation('input-field')
 //console.log(fieldValues)
    
  if(isNaN(fieldValues) || fieldValues <=0 || parseFloat(fieldValues) === NaN ){
        alert('failed to add') 
        return;                     
    }
    
   else if(fieldValues>0){
    const fieldValue=parseFloat(fieldValues)
    //console.log(fieldValue)
      const addMoney=addedMyDonation('money')
      //console.log(addMoney)
        const afterdonate=fieldValue+addMoney;
        document.getElementById('money').innerText=afterdonate;  
                              
    }
    
    const accountMoney=addedMyDonation('account-money')
    const afterWithdraw=accountMoney-fieldValues;
       document.getElementById('account-money').innerText=afterWithdraw;
       document.getElementById('my_modal_4').showModal();

       //   history list
let newHistory=document.createElement('div');
newHistory.className='border p-4 rounded bg-pink-200'
newHistory.innerHTML=`
      
      <p class="text-xl font-bold">${fieldValues}  Taka is Donated for famine-2024 at NOakhali, Bangladesh</p>
      <p class=" ">Date: ${new Date()}</p>

`;
const historyContainer=document.getElementById('new-donation');
historyContainer.insertBefore(newHistory, historyContainer.firstChild)
})

// second card
document.getElementById('donation-btn-2')
.addEventListener('click',function(event){
  event.preventDefault();
  const fieldValues2=clickMyDonation('input-field-2')
 //console.log(fieldValues2)
    
  if(isNaN(fieldValues2) || fieldValues2<=0 || parseFloat(fieldValues2) === NaN ){
        alert('failed to add') 
        return;                     
    }
    
   else if(fieldValues2>0){
    const fieldValue2=parseFloat(fieldValues2)
   // console.log(fieldValue2)
      const addMoney=addedMyDonation('money-2')
      //console.log(addMoney)
        const afterdonate=fieldValue2+addMoney;
        document.getElementById('money-2').innerText=afterdonate;  
                              
    }
    
    const accountMoney=addedMyDonation('account-money')
    const afterWithdraw=accountMoney-fieldValues2;
       document.getElementById('account-money').innerText=afterWithdraw;
       document.getElementById('my_modal_4').showModal();

       
       //   history list
let newHistory=document.createElement('div');
newHistory.className='border p-4 rounded bg-pink-200'
newHistory.innerHTML=`
      
      <p class="text-xl font-bold">${fieldValues2}  Taka is Donated for famine-2024 at feni, Bangladesh</p>
      <p class=" ">Date: ${new Date()}</p>

`;
const historyContainer=document.getElementById('new-donation');
historyContainer.insertBefore(newHistory, historyContainer.firstChild)
})

// blog page 
document.getElementById('index').addEventListener('click',function(){
       window.location.href="./blog.html"                       
});

//third card
document.getElementById('donation-btn-3')
.addEventListener('click',function(event){
  event.preventDefault();
  const fieldValues3=clickMyDonation('input-field-3')
 //console.log(fieldValues2)
    
  if(isNaN(fieldValues3) || fieldValues3<=0 || parseFloat(fieldValues3) === NaN ){
        alert('failed to add') 
        return;                     
    }
    
   else if(fieldValues3>0){
    const fieldValue3=parseFloat(fieldValues3)
   // console.log(fieldValue2)
      const addMoney=addedMyDonation('money-2')
      //console.log(addMoney)
        const afterdonate=fieldValue3+addMoney;
        document.getElementById('money-2').innerText=afterdonate;  
                              
    }
    
    const accountMoney=addedMyDonation('account-money')
    const afterWithdraw=accountMoney-fieldValues3;
       document.getElementById('account-money').innerText=afterWithdraw;
       document.getElementById('my_modal_4').showModal();

       
       //   history list
let newHistory=document.createElement('div');
newHistory.className='border p-4 rounded bg-pink-200'
newHistory.innerHTML=`
      
      <p class="text-xl font-bold">${fieldValues3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
      <p class=" ">Date: ${new Date()}</p>

`;
const historyContainer=document.getElementById('new-donation');
historyContainer.insertBefore(newHistory, historyContainer.firstChild)
})
//history
const don= document.getElementById('btn-d');
const his= document.getElementById('btn-h')
  don.addEventListener('click',function(){
       hiddenAndShow('donation')
       don.classList.add('text-black','bg-lime-300')
       his.classList.remove("bg-lime-300")                       
  });

  his.addEventListener('click',function(){
       hiddenAndShow('history-list')  
       his.classList.add('text-black','bg-lime-300')  
       don.classList.remove("bg-lime-300")                   
  });