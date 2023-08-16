document.getElementById("deposite-btn").addEventListener('click', function(){
    const newDeposite=getInputValueById('input-field')
    if(isNaN(newDeposite)){
        alert("Please input a valid Number!");
        return;
    }

    const previousDepositeAmount=getPreviousAmountById('previous-deposite')
    // console.log(previousDepositeAmount)
    const currentDeposite=previousDepositeAmount+newDeposite;
    setValueById('previous-deposite',currentDeposite);

    const previousTotalamount=getPreviousAmountById('total-balance')
    const currentTotalAmount=previousTotalamount+newDeposite;
    setValueById('total-balance',currentTotalAmount)
})