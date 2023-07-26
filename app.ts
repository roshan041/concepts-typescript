
// // class
// class User{
//     // defining fields for class - readability for complex classes
//     name: string;
//     // access specifier
//     private age: number;

//     constructor(name,age){
//         this.name= name;
//         this.age = age;
//     }
// }


// interface
interface Greetable{
    name: string;
}

interface Printable{
    print: ()=>void;
}
//same as above but more redable
// acting as contract for classes Printable forces User class to have print method
class User implements Greetable, Printable{
    constructor(public name: string, private age: number){}
    print(){
        console.log("print",this.name);
    }
}

class Admin extends User {
    constructor(name: string, age: number, private permissions : string[]){
        super(name,age);
    }
    
}

// class obj
const user = new User('roshan',22);

//we can access user name from outside but not age since it is private
console.log(user.name);


const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2'); 
const buttonElement = document.querySelector('button') as HTMLInputElement;

function add(a :number , b: number){
    return a+ b;
}

// leteral type - specifying value for printMode
// union type - | creates union
type PrintMode = 'console' | 'alert';

function printSomething1(result : string | number, printMode: PrintMode ): void{
    if(printMode==='console'){
        console.log("result",result);
    }
    else if(printMode==='alert'){
        alert(`result ${result}`);
    }
}

// enum type
enum PrintMode2 {CONSOLE, ALERT};

function printSomething2(result : string | number, printMode: PrintMode2 ): void{
    if(printMode===PrintMode2.CONSOLE){
        console.log("result",result);
    }
    else if(printMode===PrintMode2.ALERT){
        alert(`result ${result}`);
    }
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


    //interface 
    interface CalculationContainer{
        result: number;
        print: ()=> void;
    }


    // array type - array of objects where each object atleast have result of number type
    // interface used here, acting as alternative to type here
    let results2 : CalculationContainer []= [];

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


    //type alias
    type ResultObject = {result: number, print : ()=> void};

    const resultObject4 : ResultObject = {
        result: result,
        print(){
            console.log("result :",this.result);
        }
    }

    results2.push(resultObject3)
    results2[0].print();

    // printSomething1(10, 'console');
    // printSomething1(10, 'alert');


    printSomething2(20, PrintMode2.CONSOLE);
    printSomething2(20, PrintMode2.ALERT);

})