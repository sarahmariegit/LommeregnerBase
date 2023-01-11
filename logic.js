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
        return "a aa aaa";
    }    
}

// returns product of a, b and c
actions.multiply = {
    types: [Number, Number, Number],
    function: function(a, b, c){
        return -1;
    }   
}

function runTest(actionName, actions, testData){
    var result = "";
    var functionUnderTest = actions[actionName].function;
    var testCases =  testData[actionName];
    for(var i = 0; i  < testCases.length; i++)
        result += testFunctionWith(testCases[i], functionUnderTest);	

    document.getElementById("result").innerHTML = result;
}

function testFunctionWith(testCase, functionUnderTest) {
    var actual = functionUnderTest(testCase.a, testCase.b, testCase.c);
    var passed = actual === testCase.expected;
    var result = `<span style='color: ${passed ? 'green' : 'red'}'>
                    Test ${passed ? "passed" : "failed"}.
                </span>
                <br>`;
    if(!passed)
        result += `Got ${actual} with test input ${JSON.stringify(testCase)}.<br>`;

    return result;
}

