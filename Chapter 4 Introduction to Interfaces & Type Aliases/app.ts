// Interfaces and Type Aliases
// •Defining interfaces
// •Using interfaces to define object shapes
// •Extending interfaces
// • Type aliases
// • Intersection types

//  Interface / Types 

function abcd (a:string, b:number) {

}

interface User {
  name : string,
  email : string,
  password : string,
  gender?: string
}
 
const obj : User = {
  name:"gagan",
  email:"gagan@gmail.com",
  password:"P@ssw0rd",
}

function getUserData(obj : User ) {
  
}

function objobj ( obj:Object) {

}







// extending interfaces

interface Admin extends User {
  admin : boolean;
}

function efgh(obj : Admin) {
   
}


interface abcd {
  name : string;
}

interface abcd {
  email : string 
}

// the above both interfaces gets merged... so abcd contains both name and email 










// fundamental of types alias

type sankhya = number;

type value = string | number | null;

let a : sankhya;

let b : value;



// intersection types

type User2 = {
  name : string,
  email : string,
}

type Admin2 = User2 & {
  getDetails(user: string): void
}

function ijkl(a: Admin2) {
   a.getDetails 
}

// difference between interface and types

// type abcd = number;
// type abcd = string;
// the above two line will give us error but interface didnt give us error in this, they got merged unlike types.


