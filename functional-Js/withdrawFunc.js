document.getElementById('withdraw-btn').addEventListener('click',function(){
    const newWithdrawAmount=getInputValueById('withdraw-field')
    if(isNaN(newWithdrawAmount)){
        return;
    }
    const previousWithdrawAmount=getPreviousAmountById('previous-withdraw')
    const currentWithdrawAmount=previousWithdrawAmount+newWithdrawAmount;
    

    const previousTotalamount=getPreviousAmountById('total-balance')
    const currentTotalAmount=previousTotalamount-newWithdrawAmount;
    

    if(newWithdrawAmount>currentTotalAmount){
        alert("Insufficient Balance");
        return;
    }
    setValueById('previous-withdraw',currentWithdrawAmount);
    setValueById('total-balance',currentTotalAmount);
})