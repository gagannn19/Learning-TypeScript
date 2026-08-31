"use strict";
// Basic Types
// •Primitive types (number, string, boolean)
// •Arrays
// •Tuples 
// • Enums
// •Any, Unknown, Void, Null, Undefined, Never
Object.defineProperty(exports, "__esModule", { value: true });
// Data type is divided into 2 parts in TypeScript
// 1. Primitive
// 2. Refrence :- [], {}, ()
let a = 12;
// a = "ss";  // typescript warns you to initilize the variable with different datatypes.
// if we didn't use our variable or its data/value after declaring them then ts gives us this error...
// ⚠ Error (TS6133) | | | 
// a is declared but its value is never read.
console.log(a);
// Array → can contain multiple values of the same type, and its length is flexible.
// Tuple → has a fixed structure, where each position can have a specific type.
let arr = [1, 2, 3, "gagan", { name: "gagan" }];
let tup = ["harsh", 22]; // tuples...
// enumerations
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
// UserRoles.SUPER_ADMIN
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "abandoned status code 500";
    StatusCodes["NOTFOUND"] = "not found status code 404";
})(StatusCodes || (StatusCodes = {}));
// StatusCodes.NOTFOUND
// Any, Unknown, Void, Null, Undefined, Never
let a2; // declaring variable with type
a2 = 12;
// a2 = true;             //  gives us warnig 
let a3; // its type is "any"    
// user have to make ure that his variable shouldn't of "any" data type... then what is the motive of using typescript.
a3 = 55;
a3 = "gagan";
// unkown
let a4;
a4 = 99;
a4 = "hahan";
if (typeof a4 === "string") {
    a4.toUpperCase();
}
// void
function abcd() {
    console.log("hey");
}
function efgh() {
    return "gagan";
}
// null
let a5;
// a = 12;        // it give us error
let a6;
a6 = null;
a6 = "fghj";
// a6 = 88;           // it gives error
// undefined (same undefined as javascript, same logic... if we didnt give a value to a variable then that variable is undefined)
let a7;
// never
function ijkl() {
    while (true) {
    }
}
ijkl();
console.log("hey");
//# sourceMappingURL=app.js.map