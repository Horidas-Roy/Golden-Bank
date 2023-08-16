document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log("withdraw btn clicked")
    const withdrawField=document.getElementById("withdraw-field");
    let withdrawFieldStr=withdrawField.value;
    if(withdrawFieldStr===""){
        withdrawFieldStr=0;
    }
    const newWithdrawAmount=parseFloat(withdrawFieldStr)
    // console.log(newWithdrawAmount)

    const withdrawAmount=document.getElementById('withdraw-amount')
    const withdrawAmountStr=withdrawAmount.innerText;
    const previousWithdrawAmount=parseFloat(withdrawAmountStr);
    
    const newTotalWithdrawAmount=previousWithdrawAmount+newWithdrawAmount;
    withdrawAmount.innerText=newTotalWithdrawAmount;


    const totalAmount=document.getElementById("total-amount");
    const previousTotalStr= totalAmount.innerText
    // console.log(previousTotalStr)
    const previousTotal=parseFloat(previousTotalStr);
    console.log(previousTotal)
    const newBlance=previousTotal-newWithdrawAmount;
    totalAmount.innerText=newBlance;

    withdrawField.value=''
})