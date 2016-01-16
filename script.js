/*jshint multistr:true */
var text = "Hello my name is Efren. How are you today\ My full name is Efren Barragan \ I love dogs!";
var myName = "Efren";
var hits = [];

for (var i = 0; i < text.length; i++){
    if (text[i] === 'E') {
        for (var j = i; j < i + myName.length ; j++) {
            hits.push( text[ j ] );
}
}
}
if  (hits.length ===0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}