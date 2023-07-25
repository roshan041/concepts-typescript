// boolean, string, number, object , function, undefined
// typecasting - overrides by default infered type 
// num1Input: HTMLInputElement
var num1Input = document.getElementById('num1'); // typecasting way 1
var num2Input = document.getElementById('num2'); // typecasting way 2
var buttonElement = document.querySelector('button');
//type inference - automatically infer type of function i.e. infer parameter type and return value type
//function add(a: number, b: number): number
function add(a, b) {
    return a + b;
}
// void return type
// function not returning anything has void return type in ts , while its undefined in js
// for parameter type result : any => any is by default type if it doesnt have any other type
function printSomething(result) {
    console.log(result);
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
    results2.push(resultObject3);
    results2[0].print();
    //printSomething(results2);
});
