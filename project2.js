function insert(son){
    calculator.display.value = calculator.display.value + son;
}
function  equal(){
    var exp = calculator.display.value;
    if(exp){
        calculator.display.value = eval(exp);
    }
}

function clean(){
    calculator.display.value = " ";
}

function back(){
    var exp = calculator.display.value;
    calculator.display.value = exp.substring(0, exp.length-1);
}

function plusMinus(){
    var exp = calculator.display.value;
    exp *= (-1);
    calculator.display.value = exp;
}

function  equal1(){
    var exp = calculator.display.value;
    if(exp){
        calculator.display.value = eval(exp)/100;
    }
}


