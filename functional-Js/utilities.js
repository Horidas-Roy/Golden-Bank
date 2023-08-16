function getInputValueById(id){
    const inputField=document.getElementById(id);
    const inputValueStr=inputField.value;
    const inputValue=parseFloat(inputValueStr);
    inputField.value=''
    
    return inputValue;
}

function getPreviousAmountById(id){
   const previousAmountField=document.getElementById(id);
   const previousAmountStr=previousAmountField.innerText;
   const previousAmount=parseFloat(previousAmountStr);
   
   return previousAmount;
}

function setValueById(id,value){
    let previousElement=document.getElementById(id)
    previousElement.innerText=value;
}
