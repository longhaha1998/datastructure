console.log("*********************************************************************************************************************************************************************excel");
function getExcelAddr(data) {
    let tempArr = data.split(/[^\$\w]+/);
    let tempRegExp = new RegExp('(\\$)?[a-zA-Z]+(\\$)?[0-9]+');
    let result = [];
    for(let i=0;i<tempArr.length;i++){
        if(tempRegExp.test(tempArr[i])){
            result.push(tempArr[i].replace(/\$/g,""));
        }
    }
    console.log(result);
}

getExcelAddr("SUM($F$11:F20)");
getExcelAddr("SUM($G$8,G13:G20)");
getExcelAddr("IF(C7<>0,(CH7*0.985+FG7+FK7)/C7,0)");
getExcelAddr("IF(COUNTIF(I11:I20,'<>0')<>0,SUM(I11:I20)/COUNTIF(I11:I20,'<>0'),0)");
getExcelAddr("VLOOKUP(B1121,$B$354:FA7,4,FALSE)");
getExcelAddr("SUMPRODUCT(1/COUNTIF($A$274:AF83,A22145:AE8894))");

console.log("*********************************************************************************************************************************************************************26进制转换");
function get26trans(val) {
    let result = "";
    let arr = [];
    let i = val;
    do{
        arr.push(ATo1(i%26));
        i = i%26 === 0?(Math.floor(i/26)-1):Math.floor(i/26);
    }while(i > 0);
    return arr.reverse().join("");
    // do{
    //     result = i%26===0?"Z"+result:String.fromCharCode(65 + i%26 -1)+result
    //     i = i%26 === 0?(Math.floor(i/26)-1):Math.floor(i/26);
    // }while(i > 0);
    // return result;
}

function ATo1(num){
    switch (num) {
        case 1:
            return "A";
        case 2:
            return "B";
        case 3:
            return "C";
        case 4:
            return "D";
        case 5:
            return "E";
        case 6:
            return "F";
        case 7:
            return "g";
        case 8:
            return "H";
        case 9:
            return "I";
        case 10:
            return "J";
        case 11:
            return "K";
        case 12:
            return "L";
        case 13:
            return "M";
        case 14:
            return "N";
        case 15:
            return "O";
        case 16:
            return "P";
        case 17:
            return "Q";
        case 18:
            return "R";
        case 19:
            return "S";
        case 20:
            return "T";
        case 21:
            return "U";
        case 22:
            return "V";
        case 23:
            return "W";
        case 24:
            return "X";
        case 25:
            return "Y";
        case 0:
        case 26:
            return "Z";
        default:
            return;
    }
}
console.time('a');
console.log(get26trans(25));
console.log(get26trans(26));
console.log(get26trans(51));
console.log(get26trans(52));
console.log(get26trans(53));
console.log(get26trans(701));
console.log(get26trans(702));
console.log(get26trans(703));
console.log(get26trans(727));
console.log(get26trans(728));
console.log(get26trans(729));
console.timeEnd('a');


        let arrRes = [];
        function getExcelRowIndexToColumnCharByDiv(cellRowAddr){
            //清空数组
            arrRes.splice(0, arrRes.length);

            DivAndRe(cellRowAddr,26);
            //console.log("arrRes: " + arrRes);
            let str = '';
            if(arrRes.length>0 &&(arrRes.length%2 === 0)){
                for(let i=1;i<arrRes.length;i+=2){
                    if(arrRes[i] === 0){
                        str = 'Z' + str; 
                    }else{
                        str = String.fromCharCode(65 + arrRes[i] - 1) + str;
                    }
                }
                if(arrRes[arrRes.length - 2] !== 0){
                    str = String.fromCharCode(65 + arrRes[arrRes.length - 2] - 1) + str;
                }     
            }
            return str;
        }

        function DivAndRe(num,base){
            let quo = parseInt(num/base);
            let remainder = num%base;
            if(remainder === 0){
                quo = quo - 1;
            }
            arrRes.push(quo);
            arrRes.push(remainder);
            if(quo > base){
                DivAndRe(quo,base);
            }
        }

console.time('b');
console.log(getExcelRowIndexToColumnCharByDiv(25));
console.log(getExcelRowIndexToColumnCharByDiv(26));
console.log(getExcelRowIndexToColumnCharByDiv(51));
console.log(getExcelRowIndexToColumnCharByDiv(52));
console.log(getExcelRowIndexToColumnCharByDiv(53));
console.log(getExcelRowIndexToColumnCharByDiv(701));
console.log(getExcelRowIndexToColumnCharByDiv(702));
console.log(getExcelRowIndexToColumnCharByDiv(703));
console.log(getExcelRowIndexToColumnCharByDiv(727));
console.log(getExcelRowIndexToColumnCharByDiv(728));
console.log(getExcelRowIndexToColumnCharByDiv(729));
console.timeEnd('b');



