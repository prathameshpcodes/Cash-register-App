//Input- selct all the elements that we need to display 
const billAmount= document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-message");
const availableNotes = [2000,500,100,20,10,5,1];
// Selecting the array of No of notes
const noOfNotes =document.querySelectorAll(".no-of-notes")


checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessages();

    if(billAmount.value>0){
        if(cashGiven.value>=billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }else{
                showmessage("The cash provided should be atleast equal to the bill amount")
        }

    }else{
        showmessage("Invalid bill amount");
    }


    function calculateChange(amountToBeReturned){
        for (let i =0; i<availableNotes.length; i++){
            const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);

            // amount to be returned iis updated
            amountToBeReturned %= availableNotes[i];

            // update it in html format
            noOfNotes[i].innerText = numberOfNotes;

        }
    }

    // Functions
function hideMessages(){
    message.style.display ="none"
}
    function showmessage(x){
        message.style.display="block"
        message.innerText = x;
    }
});
