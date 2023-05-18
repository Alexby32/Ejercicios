// null y undefine 

let MyVar  = null;  
let otraVar = undefined;  
console.log("type of otravar:", typeof(otraVar), "type of otravar:", typeof(MyVar));


let myNull: null = null;  
let myUndefined: undefined = undefined;  
console.log("type of myNull:",typeof(myNull), "type of myUnderfined:" ,typeof(myUndefined));

let myNumber: number| null = null;
console.log("type of myNumber:" ,typeof(myNumber));
console.log("myNumber:",myNumber)

myNumber = 60;
console.log("type of myNumber:", typeof(myNumber));
console.log("myNumber:" , myNumber);

let myString: string| undefined = myUndefined;
console.log("type of myString:", typeof(myString));
console.log("myString:", myString);

myString = "Hola ts"
console.log("type of myString:", typeof(myString));
console.log("myString:",myString);
