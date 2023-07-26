// // class
// class User{
//     // defining fields for class - readability for complex classes
//     name: string;
//     // access specifier
//     private age: number;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//same as above but more redable
// acting as contract for classes Printable forces User class to have print method
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.print = function () {
        console.log("print", this.name);
    };
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, age, permissions) {
        var _this = _super.call(this, name, age) || this;
        _this.permissions = permissions;
        return _this;
    }
    return Admin;
}(User));
// class obj
var user = new User('roshan', 22);
//we can access user name from outside but not age since it is private
console.log(user.name);
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
    // interface used here, acting as alternative to type here
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
