let action,value1, value2;
let hasBeenCaluclated = false;


function showValue(value){
    if(!hasBeenCaluclated){
        document.getElementById('result').innerText += value;
    }

    else{
        cleanLine();
        hasBeenCaluclated = false;
        alert("Resetting Calculator Display...")
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
function enableSelection() {
        const enabled = document.getElementById('enabler').checked;
    
        if (enabled) {
            document.getElementById('lightGray').disabled = false;
            document.getElementById('darkGray').disabled = false;
        } else {
            document.getElementById('lightGray').disabled = true;
            document.getElementById('darkGray').disabled = true;
    
            document.body.classList.remove('lightSelection');
            document.body.classList.remove('darkSelection');

            resetSelection();
        }
    }
    
    function setColor() {
        const isLightGray = document.getElementById('lightGray').checked;
        const isDarkGray = document.getElementById('darkGray').checked;
    
        if (isLightGray) {
            document.body.classList.add('lightSelection');
            document.body.classList.remove('darkSelection');
        } else if (isDarkGray) {
            document.body.classList.add('darkSelection');
            document.body.classList.remove('lightSelection');
        }
    }

    function resetSelection(){
        document.getElementById('lightGray').checked=false;
        document.getElementById('darkGray').checked=false;
    }
    
    
