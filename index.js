let action,value1, value2;
let hasBeenCaluclated = false;


function showValue(value){
    if(!hasBeenCaluclated){
        document.getElementById('result').innerText += value;
    }

    else{
        cleanLine();
        hasBeenCaluclated = false;
    }
}

function resetValues(){
    cleanLine();
    value1 = 0;
    value2 = 0;
}

function cleanLine(){
    document.getElementById('result').innerText ="";
}

function setCalcType(actionPrerformed){
    action = actionPrerformed;
    value1 = getValue();
    cleanLine();
}

function getValue(){
    return document.getElementById('result').innerText;
}

function applyResult(){
    document.getElementById('result').innerText = result.toString();
}

function calculate(){
    
        value2 = getValue();

        let v1 = Number(value1);
        let v2 = Number(value2);
        hasBeenCaluclated=true;
    
    
        if(action === '/'){
            if (v2 === 0){
                result = "error"
            }
            else{
                result = (v1/v2);
                
            }
            
            applyResult();
        }
    
        else if(action === 'X'){
            result = (v1*v2);
            applyResult();
        }
    
        else if(action === '+'){
            result = (v1+v2);
            applyResult();
        }
    
        else if(action === '-'){
            result = (v1-v2);
            applyResult();
        }
    }

    
    
