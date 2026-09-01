// 4. Type inference
// --> understanding type inference
// --> Type Annotations

let a = 12;
// in above code we didnt define the type of the variable and data, typescript by itself find outs its variable type , this is called type inference.

let a1 = "12";

let a3 : string = "gagan"; // this is type annotations

let a4 : number | boolean | string;

a4 = "gagan";
a4 = true;
a4 = 33;



// type annotation

function abcd (a:string, b:number):void { 

}

