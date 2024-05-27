const InputScreen=document.querySelector(".InputScreen")

const buttons=document.querySelectorAll("button")






buttons.forEach(BTN =>{
    let operand;
    BTN.addEventListener("click",(event)=>{
        if(BTN.value==="="){
            for(let i=0;i<InputScreen.value.length;i++){
                if(InputScreen.value.indexOf("+")!==-1){
                    operand=InputScreen.value.indexOf("+")
                    break;
                }
                if(InputScreen.value.indexOf("*")!==-1){
                    operand=InputScreen.value.indexOf("*")
                    break;
                }

                if(InputScreen.value.indexOf("-")!==-1){
                    operand=InputScreen.value.indexOf("-")
                    break;
                }
                if(InputScreen.value.indexOf("/")!==-1){
                    operand=InputScreen.value.indexOf("/")
                    break;
                }

                
            }
           
             
            let firstNumber=Number(InputScreen.value.slice(0,operand))
            let secondNumber=Number(InputScreen.value.slice(operand+1))  
            operand=(InputScreen.value.charAt(operand))
            console.log(firstNumber)
            console.log(secondNumber)
            console.log(operand)
            
            InputScreen.value=operate(operand,firstNumber,secondNumber)


        }
        else{

       InputScreen.value+=BTN.value
        }


        if(BTN.value=="C"){
            InputScreen.value=""
        }
    })
 
})


// if the user inputs the operand more than two times result in error 
buttons.forEach(BTN=>{
    

       
    if(BTN.value==="*" || BTN.value==="/" || BTN.value=="-" || BTN.value=="+"){


        BTN.addEventListener("dblclick",(event)=>{
            InputScreen.value="ERROR"
            
            buttons.forEach(BTN=>{
                
            })
        
        })
        
         }
})

 


 



function add(firstNumber,secondNumber){
    InputScreen.value=""
    return firstNumber+secondNumber;

}

function substract(firstNumber,secondNumber){
    InputScreen.value=""
    return firstNumber-secondNumber;

}

function multiply(firstNumber,secondNumber){
    InputScreen.value=""
    return firstNumber*secondNumber;

}

function divide(firstNumber,secondNumber){
    InputScreen.value=""
    return firstNumber/secondNumber;

}


function operate(Operator,firstNumber,secondNumber){
    switch(true){
        case Operator==="+":
             return InputScreen.value=add(firstNumber,secondNumber)
            break;

        case Operator==="-":
            InputScreen.value=""
             return InputScreen.value=substract(firstNumber,secondNumber)
            break;

        case Operator=="/":
            InputScreen.value=""
             return InputScreen.value=divide(firstNumber,secondNumber)
            break;

        case Operator=="*":
            InputScreen.value=""
           return  InputScreen.value=multiply(firstNumber,secondNumber)
            break;
    }
}


