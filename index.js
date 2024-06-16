const input = document.querySelector(".input")

const buttons = document.querySelectorAll("button")

const clearButton = document.querySelector(".clear")

const operands=[]

const negativeOperands=[]



 
function Operate(firstNumber,Operator,secondNumber){
    operands.length=0
    console.log(operands)
    input.value=""
    switch(true){
        case Operator==="+":
            input.value=firstNumber+secondNumber
            console.log(input.value.length)
            break;

        case Operator==="-":
            input.value=firstNumber-secondNumber
            break;

        case Operator==="*":
            input.value=firstNumber*secondNumber
            break;
        
        case Operator==="/":
            if(secondNumber==0){
                input.value="What are u doing"
            }
            else{
            input.value=firstNumber/secondNumber;
            }
            break;
        }
    
 


}
 


buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        
        if(input.value.startsWith("+")){
            operands.pop()
          input.value=input.value.replace(input.value.charAt(0),"")
        }
        if(input.value.startsWith("/")){
            operands.pop()
          input.value=input.value.replace(input.value.charAt(0),"")
        }
        if(input.value.startsWith("*")){
            operands.pop()
          input.value=input.value.replace(input.value.charAt(0),"")
        }

      

       

       
        
        if(button.value==="+" || button.value==="-" ||  button.value==="*" || button.value==="/"){
            operands.push(button.value)
        }
    
     
  
        if(button.value==="="){
            let operand;
            for(let i=0;i<input.value.length;i++){
                if(input.value.indexOf("+")!==-1){
                    operand=input.value.indexOf("+")
                    break;
                }
                if(input.value.indexOf("*")!==-1){
                    operand=input.value.indexOf("*")
                    break;
                }

                if(input.value.indexOf("-")!==-1){
                    operand=input.value.indexOf("-")
                    break;
                }
                if(input.value.indexOf("/")!==-1){
                    operand=input.value.indexOf("/")
                    break;
                }    
            }
            let firstNumber=Number(input.value.slice(0,operand))
            let secondNumber=Number(input.value.slice(operand+1))  
            operand=(input.value.charAt(operand))

            Operate(firstNumber,operand,secondNumber)

 
           
        }
 

        else{
            input.value+=button.value
                if(operands.length>1){
                    console.log("ya go in?")
                    let LastOperand=operands[operands.length-1]
                    let operand=operands[0]
                    let firstNumber= Number(input.value.slice(0,input.value.indexOf(operand)))
                    let secondNumber=Number(input.value.slice(input.value.indexOf(operand)+1,input.value.lastIndexOf(LastOperand)))
                    console.log(operands)
                    Operate(firstNumber,operand,secondNumber)
                     
     
            
                }
                
            }
        }

       
    )})








clearButton.addEventListener("click",()=>{
    input.value=""
})

