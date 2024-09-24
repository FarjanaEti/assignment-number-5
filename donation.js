document.getElementById('donation-btn')
.addEventListener('click',function(event){
  event.preventDefault();
  const fieldValue=clickMyDonation('input-field')
  const dtr=isNaN( parseFloat(fieldValue))
    
  if(isNaN(fieldValue) || fieldValue <=0 || parseFloat(fieldValue) === NaN ){
        alert('failed to add') 
        return;                     
    }
    
   else if(fieldValue>0){
      
      const addMoney=addedMyDonation('money')
      //console.log(addMoney)
        const afterdonate=fieldValue+addMoney;
        document.getElementById('money').innerText=afterdonate;  
                              
    }
    
    const accountMoney=addedMyDonation('account-money')
    const afterWithdraw=accountMoney-fieldValue;
       document.getElementById('account-money').innerText=afterWithdraw;
       document.getElementById('my_modal_4').showModal();
})

// second card
document.getElementById('donation-btn-2')
.addEventListener('click',function(event){
  event.preventDefault();
  const fieldValue=clickMyDonation('input-field-2')
  // console.log(fieldValue);
    
  if(isNaN(fieldValue) || fieldValue <=0 || parseFloat(fieldValue) === NaN){
        alert('failed to add') 
        return;                     
    }
   
    if(fieldValue>0){
      const addMoney=addedMyDonation('money-2')
      //console.log(addMoney)
        const afterdonate=fieldValue+addMoney;
        document.getElementById('money-2').innerText=afterdonate;                        
    }
    const accountMoney=addedMyDonation('account-money')
    // if(accountMoney<0){
    //   alert('You dont have enough money to donate');
    //   return;
    // }
    const afterWithdraw=accountMoney-fieldValue;
       document.getElementById('account-money').innerText=afterWithdraw;
       document.getElementById('my_modal_4').showModal();
})

//third card
document.getElementById('donation-btn-3')
.addEventListener('click',function(event){
  event.preventDefault();
  const fieldValue=clickMyDonation('input-field-3')
 // console.log(fieldValue);
    
  if(isNaN(fieldValue) || fieldValue <=0 || parseFloat(fieldValue) === NaN){
        alert('failed to add-3') 
        return;                     
    }
   
    if(fieldValue>0){
      const addMoney=addedMyDonation('money-3')
      //console.log(addMoney)
        const afterdonate=fieldValue+addMoney;
        document.getElementById('money-3').innerText=afterdonate;                        
    }
    const accountMoney=addedMyDonation('account-money')
    const afterWithdraw=accountMoney-fieldValue;
       document.getElementById('account-money').innerText=afterWithdraw;
       document.getElementById('my_modal_4').showModal();
})
