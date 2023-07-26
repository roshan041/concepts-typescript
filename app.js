var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function add(a, b) {
    return a + b;
}
function printSomething1(result, printMode) {
    if (printMode === 'console') {
        console.log("result", result);
    }
    else if (printMode === 'alert') {
        alert("result ".concat(result));
    }
}
// enum type
var PrintMode2;
(function (PrintMode2) {
    PrintMode2[PrintMode2["CONSOLE"] = 0] = "CONSOLE";
    PrintMode2[PrintMode2["ALERT"] = 1] = "ALERT";
})(PrintMode2 || (PrintMode2 = {}));
;
function printSomething2(result, printMode) {
    if (printMode === PrintMode2.CONSOLE) {
        console.log("result", result);
    }
    else if (printMode === PrintMode2.ALERT) {
        alert("result ".concat(result));
    }
}
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', function () {
    var num1 = +(num1Input === null || num1Input === void 0 ? void 0 : num1Input.value); // adding plus to make it number type
    var num2 = +(num2Input === null || num2Input === void 0 ? void 0 : num2Input.value);
    var result = add(num1, num2);
    // type infered - array type containing string values
    // let arr: string[]
    var arr = ['roshan'];
    // array type - array of objects where each object atleast have result of number type
    var results1 = [];
    // array type - array of objects where each object atleast have result of number type
    var results2 = [];
    // infered object 
    // const resultObject1: {
    //     result: any;
    // }
    var resultObject1 = {
        result: result,
    };
    // object type
    var resultObject2 = {
        result: result,
    };
    // object type - better approach since it gives us type of values for keys in object 
    var resultObject3 = {
        result: result,
        print: function () {
            console.log("result :", this.result);
        }
    };
    var resultObject4 = {
        result: result,
        print: function () {
            console.log("result :", this.result);
        }
    };
    results2.push(resultObject3);
    results2[0].print();
    // printSomething1(10, 'console');
    // printSomething1(10, 'alert');
    printSomething2(20, PrintMode2.CONSOLE);
    printSomething2(20, PrintMode2.ALERT);
});
