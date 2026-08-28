"use strict";
// Basic Types
// •Primitive types (number, string, boolean)
// •Arrays
// •Tuples // • Enums
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
let tup = ["harsh", 22];
//# sourceMappingURL=app.js.map