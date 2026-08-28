// typescript gives us type safety...

var a = 12;
var b = 13;
// a = "gagan"



// TypeScript Setup ...

// 1. Setting up a TypeScript project  = installing TypeScript and preparing the project structure to write TypeScript code.
// You did things like:
// npm init -y
// npm install -D typescript
// Then you created:
// my-project/
//    └── app.ts

// 2. Configuring tsconfig. json = rules/instructions that tell the TypeScript compiler how to compile my project.

// 3. CompilingTypeScript = Convert .ts → .js.

function abcd() {
  let x = 12;
  let y = 22;
}

// Just do these ...
// Make a folder folder_name
// Make a file inside it file_name.ts
// Run npx tsc --init , This creates tsconfig.json.
// npx tsc --watch