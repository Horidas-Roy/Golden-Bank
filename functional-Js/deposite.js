document.getElementById("deposite-btn").addEventListener("click",function(){
    // console.log('deposite clicked')
    let depositeField=document.getElementById('input-field')
    const newDepositeStr=depositeField.value;
    const newDepositeAmount=parseFloat(newDepositeStr);

    
    depositeField.value=''

    if(isNaN(newDepositeAmount)){
        alert('Please provide a valid number');
        return;
    }
    // console.log(typeof depositeAmount)

    const previousDepositeElement=document.getElementById('previous-deposite')
    const previousDepositeStr=previousDepositeElement.innerText;
    const previousDepositeamount=parseFloat(previousDepositeStr);
    // console.log(previousDepositeamount)

    const totalDeposite=newDepositeAmount+previousDepositeamount;
    previousDepositeElement.innerText=totalDeposite;
    console.log(previousDepositeElement);

    let previousBalanceElement=document.getElementById('total-balance');
    const previousBalanceStr=previousBalanceElement.innerText
    const previousBalance=parseFloat(previousBalanceStr);

    const currentBalance=previousBalance+newDepositeAmount;
    previousBalanceElement.innerText=currentBalance;

})