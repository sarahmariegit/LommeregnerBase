
var pressButton = function(action){
    var inA = document.getElementById("inputA").value;
    var inB = document.getElementById("inputB").value;
    var inC = document.getElementById("inputC").value;
    let actions = {
        "add": add(Number(inA), Number(inB)),
        "multiply": multiply(Number(inA), Number(inB)),
        "subtract": subtract(Number(inA), Number(inB)),
        "diskriminant": diskriminant(Number(inA), Number(inB), Number(inC)),
        "minVal": minVal(Number(inA), Number(inB), Number(inC)),
        "midVal": midVal(Number(inA), Number(inB), Number(inC)),
        "maxVal": maxVal(Number(inA), Number(inB), Number(inC)),
        "showString": showString(inA, inB, inC),
        "reverse": reverseString(inA, inB, inC),
        "løs2grads": løs2grads(Number(inA), Number(inB), Number(inC)),
        "sortByAlphabet": sortByAlphabet(inA, inB, inC),
        "kampPoint": kampPoint(inA),
        "canEnterDemon": canEnterDemon(Number(inA), Boolean(inB), Boolean(inC)),
        "exactlyOne": exactlyOne(Boolean(inA), Boolean(inB), Boolean(inB)),
        "exactlyTwo": exactlyTwo(Boolean(inA), Boolean(inB), Boolean(inB)),
    };
    result = actions[action];
    document.getElementById("result").innerHTML = result;
}

var add = function(a, b){
    return a + b;
}
var subtract = function(a, b){
    return 0;
}
var multiply = function(a, b){
    return 0;
}
// skriv inhold til funk
var diskriminant = function(a, b, c){
    return 0;
}
/**
 * HINT: diskrimant(....) might be handy.
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns all solutions spaced by " og " returns null if no solutions exists.
 */
var løs2grads = function(a, b, c){
    return "0 og 1" 
}
var minVal = function(a, b, c){
    return 0;
}
var maxVal =  function(a, b, c){
    return 0;
}
var midVal =  function(a, b, c){
    return 0;
}
var showString = function(a, b, c){
    return "Jeg er skøn";
}
var reverseString = function(a, b, c){
    return "skøn jeg er";
}
var sortByAlphabet = function(a, b, c){
    return "er jeg lang";
}
var navneLængde = function(a, b, c){
    return 10;
}
var kampPoint = function(a, b, c){
    return 0;
}
/**
 * @param {number} height 
 * @param {boolean} withAdult 
 * @param {boolean} isTipsy 
 * @returns true if height is > 160 or is with an adult and is not tipsy, false otherwise.
 */
var canEnterDemon = function(height, withAdult, isTipsy){
    return false;
}
/**
 * @param {boolean} b1 
 * @param {boolean} b2 
 * @param {boolean} b3 
 * @returns true if exactly one parameter is true.
 */
var exactlyOne = function(b1, b2, b3){
    return false;
}
/**
 * Similar to above true if exactly two parameters is true.
 */
var exactlyTwo = function(b1, b2, b3){
    return false;
}

