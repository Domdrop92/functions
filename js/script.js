// declare a function
function formatName(firstName , lastName){
    console.log(firstName);
    console.log(lastName);

    console.log(lastName + ' ' + firstName);
    var formattedName = lastName + ' ' + firstName;
    localStorage.setItem('userFullName', formattedName);
    return formattedName;
}
//check to see if userFullName is already saved in locasStorage

if (localStorage.getItem('userFullName')){

} else{
    
}


var userFirstName = 'Dominique';
var userLastName = 'Dixon';

formatName( userFirstName , userLastName);


//function expression:
var createUserObj = function ( firstName , lastName){
    var userObj ={
        name: formatName(firstName, lastName),
        age: null
    };

    return userObj; 
}(userFirstName, userLastName);

console.log(createUserObj);

//constructor way
var concatinate = new Function('x','y', 'return x + y');
console.log(concatinate('Dominique', 'Dixon'));


