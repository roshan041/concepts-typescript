// boolean, string, number, object , function, undefined

// typecasting - overrides by default infered type 
// num1Input: HTMLInputElement
const num1Input = document.getElementById('num1') as HTMLInputElement; // typecasting way 1
const num2Input = <HTMLInputElement>document.getElementById('num2');  // typecasting way 2
const buttonElement = document.querySelector('button') as HTMLInputElement;

//type inference - automatically infer type of function i.e. infer parameter type and return value type
//function add(a: number, b: number): number
function add(a :number , b: number){
    return a+ b;
}

// void return type
// function not returning anything has void return type in ts , while its undefined in js
// for parameter type result : any => any is by default type if it doesnt have any other type
function printSomething(result): void{
    console.log(result);
}

buttonElement?.addEventListener('click',()=>{
    const num1 = +num1Input?.value; // adding plus to make it number type
    const num2 = +num2Input?.value;

    const result= add(num1,num2 );


    // type infered - array type containing string values
    // let arr: string[]
    let arr = ['roshan']

    // array type - array of objects where each object atleast have result of number type
    let results1 : {result: number} []= [];

    // array type - array of objects where each object atleast have result of number type
    let results2 : {result: number, print: ()=> void} []= [];

    // infered object 
    // const resultObject1: {
    //     result: any;
    // }
    const resultObject1 = {
        result: result,
    }

    // object type
    const resultObject2 : object = {
        result: result,
    }

    // object type - better approach since it gives us type of values for keys in object 
    const resultObject3 : {result: number, print : ()=> void} = {
        result: result,
        print(){
            console.log("result :",this.result);
        }
    }

    results2.push(resultObject3)
    results2[0].print();
    //printSomething(results2);

})