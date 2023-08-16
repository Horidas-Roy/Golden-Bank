document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdraw-field');
    const withdrawFieldStr=withdrawField.value;
    const newWithdrawBalance=parseFloat(withdrawFieldStr);
    // console.log(newWithdrawBalance);

    withdrawField.value=''
    if(isNaN(newWithdrawBalance)){
        alert("Please provide a valid number");
        return;
    }
    
    let previousWithdrawElement=document.getElementById('previous-withdraw')
    const previousWithdrawStr=previousWithdrawElement.innerText
    const previousWithdrawAmount=parseFloat(previousWithdrawStr)

   

    let totalBalanceElement=document.getElementById('total-balance')
    const totalBalanceStr=totalBalanceElement.innerText;
    const totalBalance=parseFloat(totalBalanceStr)

    if(totalBalance<newWithdrawBalance){
        alert("Insuficient Balance")
        return;
    }

    const currentWithdraw=newWithdrawBalance+previousWithdrawAmount;
    previousWithdrawElement.innerText=currentWithdraw;

    const currentBalance=totalBalance-newWithdrawBalance;
    totalBalanceElement.innerText=currentBalance;

    

})