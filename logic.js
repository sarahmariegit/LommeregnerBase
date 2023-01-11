function runTest(actionName, actions, testData){
    result = "";
    functionUnderTest = actions[actionName].function;
    data =  testData[actionName];
    for(var i = 0; i  < data.length; i++){
        var yourResult = functionUnderTest(data[i].a, data[i].b, data[i].c);
        var expectedResult = data[i].expected;
        var passed = yourResult === expectedResult;
        result += `<span style='color: ${passed ? 'green' : 'red'}'>Test ${i + 1} ${passed? "passed" : "failed"}.</span><br>`;
        result += passed ? "" : `Got ${yourResult} with test input ${JSON.stringify(data[i])}.<br>`;	
    }
    document.getElementById("result").innerHTML = result;
}

var actions = {};

actions.add = {};
actions.add.types = [Number, Number, Number];
actions.add.function = function(a, b, c){
    return a + b + c;
}

actions.add1 = {
    types: [Number, Number, Number],
    function: function(a, b, c){
        return -1;
    }   
}

// returns a string with the shortest word first, then the second shortes and last the longest.
actions.sortOnLength = {
    types: [String, String, String],
    function: function(a, b, c){
        return "a aa ccc";
    }    
}

// returns product of a, b and c
actions.multiply = {
    types: [Number, Number, Number],
    function: function(a, b, c){
        return -1;
    }   
}






