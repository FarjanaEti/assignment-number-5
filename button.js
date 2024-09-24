
const don= document.getElementById('btn-d')
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

  