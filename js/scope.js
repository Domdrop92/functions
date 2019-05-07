//global scope
var globalVar= 'Hello World!';

function sayHello(){
    console.log(globalVar);

    var funcVar = 'I\'m scopred inside a function.';
    console.log(funcVar);
}

sayHello();
console.log(globalVar);
// console.log(funcVar);

if (true) {
    var blockVar = 'I am inside a block.';
    console.log(blockVar);
}
console.log(blockVar);

function secondFunction(){
    // console.log(funcVar);
}
secondFunction();

//nested scope
function outerFunction(){
    const outer= 'I am defined in outerFunction.';
    console.log(outer);
    
    function innerFunction(){
        const inner = 'I am defined in innerFunction.';
        console.log(inner);
    }

    function secondFunction(){
        console.log('blah');
    }
    // innerFunction();
    // console.log(inner);
    return innerFunction;
}
outerFunction()();




