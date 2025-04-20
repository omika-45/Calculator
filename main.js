let display = document.getElementById('num-area');

function clearDisplay() {
    display.value = '';
}

function appendToDisplay(value) {
    display.value += value;
}
function calculateResult(){
    try{
        display.value = eval(display.value);
    }
    catch (e){
        display.value = 'error';
    }
}