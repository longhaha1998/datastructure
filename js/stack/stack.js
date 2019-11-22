class Stack{
    constructor(){
        this.datastore = [];
        this.top = 0;
        this.push = stackPush;
        this.pop = stackPop;
        this.peek = stackPeek;
        this.clear = stackClear;
        this.length = stackLength;
    }
}

function stackPush(ele) {
    this.datastore[this.top++] = ele;
}

function stackPop() {
    return this.datastore[--this.top];
}

function stackPeek() {
    return this.datastore[this.top-1];
}

function stackClear() {
    this.top = 0;
}

function stackLength() {
    return this.top;
}

// 只适用于2~9进制   ！？  因为大于9之后就要引入英文字母
function mulBase(num, base) {
    let resultStack = new Stack();
    do {
        resultStack.push(num%base);
        num = Math.floor(num/base);
    }while(num>0)
    let result = "";
    while (resultStack.length()) {
        result += resultStack.pop();
    }
    return Number(result);
}

function applyBrackets(data){
    let temp = new Stack();
    for (let i=0; i<data.length; i++) {
        if (data[i] === "(" || data[i] === "{" || data[i] === "[") {
            temp.push(data[i]);
        }
        switch(data[i]){
            case ")":
                if(temp.pop() !== "("){
                    return i;
                }
                break;
            case "]":
                if(temp.pop() !== "]"){
                    return i;
                }
                break;
            case "}":
                if(temp.pop() !== "}"){
                    return i;
                }
                break;
            default:
                break;
        }
    }
    if (temp.length > 0) {
        return false;
    }
    return true;
}

function calculate(data) {
    let num = new Stack();
    let operator = new Stack();
    for (let i=0; i<data.length; i++) {
        if (!isNaN(Number(data[i]))) {
            num.push(Number(data[i]));
        }else{
            switch(data[i]){
                case "+":
                case "-":
                    while (operator.length()>0) {
                        num.push(cal(num.pop(),num.pop(),operator.pop()));
                    }
                    operator.push(data[i]);
                    break;
                case "*":
                case "/":
                    if(ifCal(operator.peek(),data[i])){
                        operator.push(data[i]);
                        break;
                    }else{
                        while (operator.length()>0) {
                            num.push(cal(num.pop(),num.pop(),operator.pop()));
                        }
                        operator.push(data[i]);
                        break;
                    }
                default:
                    break;
            }
        }
    }
    function ifCal(m, n){
        if ((m === "+" || m === "-") && (n === "*" || n === "/")) {
            return true;
        }
        return false;
    }
    function cal(m,n,o){
        switch(o){
            case "+":
                return add(m,n);
            case "-":
                return subtract(m,n);
            case "*":
                return mul(m,n);
            case "/":
                return divide(m,n);
        }
    }
    function add(m,n){
        return m+n;
    }
    function subtract(m,n){
        return n-m;
    }
    function mul(m,n){
        return m*n;
    }
    function divide(m,n){
        return n/m;
    }
    while (operator.length()>0) {
        num.push(cal(num.pop(),num.pop(),operator.pop()));
    }
    return num.pop();
}