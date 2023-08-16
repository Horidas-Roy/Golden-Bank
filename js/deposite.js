document.getElementById("btn-deposite").addEventListener("click", function(){
    const depositField=document.getElementById("deposite-field");
    let newDeposite=depositField.value;
    if(newDeposite===""){
        newDeposite=0;
    }
    newDeposite=Number.parseFloat(newDeposite);
    // console.log(typeof newDeposite)
    
    const depositeAmount=document.getElementById("deposite-amount");
    const previousDepositeStr= depositeAmount.innerText;
    const previousDeposite=parseFloat(previousDepositeStr);
    // console.log( typeof previousDeposite);
    const newDepositeTotal=previousDeposite+newDeposite;
    
    depositeAmount.innerText=newDepositeTotal;
    // console.log(newDepositeTotal);
    
    
    const totalAmount=document.getElementById("total-amount");
    const previousTotalStr= totalAmount.innerText
    // console.log(previousTotalStr)
    const previousTotal=parseFloat(previousTotalStr);
    console.log(previousTotal)
    const newBlance=previousTotal+newDeposite;
    totalAmount.innerText=newBlance;
    
    
    depositField.value=""

    
})