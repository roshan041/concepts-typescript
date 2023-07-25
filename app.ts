// boolean, string, number, object , function, undefined

// type HTMLElement
// num1Input: HTMLElement | null
// const num1Input = document.getElementById('num1');
// const num2Input = document.getElementById('num2');
// const buttonElement = document.querySelector('button');


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

//type inference - automatically infer type for res1
//res1 : number
let res1 = add(2,3);
console.log(res1);


// function type defined by us
function subtract(a :number , b: number): number{
    return a - b;
}

// type defined by us
const res2 : number = subtract(4,2);


// infer isTrue : boolean
let isTrue = false;



// void return type
// function not returning anything has void return type in ts , while its undefined in js
// for parameter type result : any => any is by default type if it doesnt have any other type
function printSomething(result): void{
    console.log(result);
}

// undefined return type
function printVal(result): undefined{
    console.log(result);
    return undefined;
}

buttonElement?.addEventListener('click',()=>{
    const num1 = +num1Input?.value; // adding plus to make it number type
    const num2 = +num2Input?.value;

    const result= add(num1,num2 );
    printSomething(result);

})