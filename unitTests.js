var testButton =  function(action){
    if(action == "add")
        result = testadd();
    else if(action == "diskriminant")
        result = testdiskriminant();
    else if(action == "minVal")
        result = testminVal();
    else if(action == "midVal")
        result = testmidVal();
    else if(action == "maxVal")
        result = testmaxVal();
    else if(action == "showString")
        result = testshowString();
    else if(action == "reverseString")
        result = testreverseString();
    else if(action == "løs2grads")
        result = testløs2grads();
    else if(action == "sortByLength")
        result = testsortByLength();
    else if(action == "sortByAlphabet")
        result = testsortByAlphabet();
    else if(action == "kampPoint")
        result = testkampPoint();
    else if(action == "seriePoint")
        result = testseriePoint();
    else if(action == "vinder")
        result = testvinder();
    else if(action == "testcanEnterDemon")
        result = testcanEnterDemon();
    else if(action == "testexactlyOne")
        result = testexactlyOne();
    else
        console.log("Error: no such test")
    
    document.getElementById("result").innerHTML = result;
}
var runTests = function(func, data){
    displayString = "";
    for(var i= 0; i  < data.length; i++){
        var yourResult = func(data[i].a, data[i].b, data[i].c);
        var expectedResult = data[i].expected;
        if(expectedResult === yourResult){
            displayString += "<span style='color: #00ff00'>Test " + (i+1) + 
            " passed</span><br>";
        } else {
            displayString += "<span style='color: #ff0000'>Test " + (i+1) + 
            " failed. Got "+ yourResult +" with test input "+ JSON.stringify(data[i]) +".</span><br>";
        }
    }
    return displayString;
}
var testadd = function(){
    data = [{
        a: 1,
        b: 2,
        expected: 3
    },{
        a: -1,
        b: -8,
        expected: -9
    },{
        a: 12435262,
        b:-33469443,
        expected: -21034181
    }];
    return runTests(add,data);
    
}

var testdiskriminant = function(a, b, c){
    data = [{
        a: 1,
        b: 2,
        c: 3,
        expected: -8
    },{
        a: -1,
        b: -8,
        c: 2,
        expected: 72
    },{
        a: 123,
        b: 987,
        c: 567,
        expected: 695205
    }];
    return runTests(diskriminant, data);
}
var testløs2grads = function(a, b, c){
    data = [{
        a: 1,
        b: 2,
        c: 3,
        expected: null
    },{
        a: -1,
        b: -8,
        c: 2,
        expected: "-8 og 0"
    },{
        a: 1,
        b: -6,
        c: 9,
        expected: 3
    }];
    return runTests(løs2grads, data);
}

var testminVal = function(a, b, c){
    data = [{
        a: 1,
        b: 2,
        c: 3,
        expected: 1
    },{
        a: -1,
        b: -8,
        c: 2,
        expected: -8
    },{
        a: 123,
        b: -987,
        c: 567,
        expected: -987
    },{
        a: 122,
        b: 122,
        c: 567,
        expected: 122
    },{
        a: 122,
        b: 122,
        c: 122,
        expected: 122
    }];
    return runTests(minVal, data);
}
var testmaxVal =  function(a, b, c){
    data = [{
        a: 1,
        b: 2,
        c: 3,
        expected: 3
    },{
        a: -1,
        b: -8,
        c: 2,
        expected: 2
    },{
        a: 123,
        b: -987,
        c: 567,
        expected: 567
    },{
        a: 122,
        b: 122,
        c: 567,
        expected: 567
    },{
        a: 122,
        b: 122,
        c: 122,
        expected: 122
    }];
    return runTests(maxVal, data);
}
var testmidVal =  function(a, b, c){
    data = [{
        a: 1,
        b: 2,
        c: 3,
        expected: 2
    },{ 
        a: -1,
        b: -8,
        c: 2,
        expected: -1
    },{
        a: 123,
        b: -987,
        c: 567,
        expected: 123
    },{
        a: 122,
        b: 122,
        c: 567,
        expected: 122
    },{
        a: 122,
        b: 122,
        c: 122,
        expected: 122
    }];
    return runTests(midVal, data);
}
var testshowString = function(a, b, c){

    data = [{
        a: "hej",
        b: "med",
        c: "dig",
        expected: "hej med dig"
    },{
        a: "Lev",
        b: "vel",
        c: "Frank",
        expected: "Lev vel Frank"
    },{
        a: "1",
        b: "2",
        c: "3",
        expected:"1 2 3"
    },{
        a: "Sådan",
        b: "går",
        c: "det.",
        expected: "Sådan går det."
    }];
    return runTests(showString, data);
}
var testreverseString = function(a, b, c){
    data = [{
        a: "hej",
        b: "med",
        c: "dig",
        expected: "dig med hej"
    },{
        a: "Lev",
        b: "vel",
        c: "Frank",
        expected: "Frank vel Lev"
    },{
        a: "1",
        b: "2",
        c: "3",
        expected:"3 2 1"
    },{
        a: "Virum",
        b: "Gymnasium",
        c: "Styrer",
        expected: "Styrer Gymnasium Virum"
    }];
    return runTests(reverseString, data);
}
var testsortByLength = function(a, b, c){
    data = [{
        a: "hej",
        b: "mette",
        c: "jørgensen",
        expected: "hej mette jørgensen"
    },{
        a: "Lev",
        b: "vagt",
        c: "Frank",
        expected: "Lev vagt Frank"
    },{
        a: "-----",
        b: "--",
        c: "--",
        expected:"-- -- -----"
    },{
        a: "Virum",
        b: "Gymnasium",
        c: "Styrer",
        expected: "Virum Styrer Gymnasium"
    }];
    return runTests(sortByLength, data);
}
var testsortByAlphabet = function(a, b, c){
    data = [{
        a: "hej",
        b: "mette",
        c: "jørgensen",
        expected: "hej jørgensen mette"
    },{
        a: "Lev",
        b: "vagt",
        c: "Frank",
        expected: "Lev Frank vagt"
    },{
        a: "a",
        b: "b",
        c: "c",
        expected:"a b c"
    },{
        a: "Virum",
        b: "Gymnasium",
        c: "Styrer",
        expected: "Gymnasium Styrer Virum"
    }];
    return runTests(sortByAlphabet, data);
}
var testkampPoint = function(a, b, c){
    data = [{
        a: "V",
        b: "",
        c: "",
        expected: 3
    },{
        a: "T",
        b: "",
        c: "",
        expected: 0
    },{
        a: "U",
        b: "",
        c: "",
        expected: 1
    }];
    return runTests(kampPoint, data);
}
var testseriePoint = function(a, b, c){
    data = [{
        a: "VVV",
        expected: 9
    },{
        a: "VVU",
        expected: 7
    },{
        a: "",
        expected: 0
    },{
        a: "TTUUTTVV",
        expected: 8
    }];
    return runTests(seriePoint, data);
}
var testcanEnterDemon = function(a, b, c){
    data = [{
        a: 100,
        b: true,
        c: false,
        expected: true
    },{
        a: 180,
        b: true,
        c: false,
        expected: true
    },{
        a: 160,
        b: false,
        c: false,
        expected: false
    },{
        a: 180,
        b: true,
        c: true,
        expected: false
    }];
    return runTests(canEnterDemon, data);
}
var testexactlyOne = function(a, b, c){
    data = [{
        a: false,
        b: true,
        c: false,
        expected: true
    },{
        a: false,
        b: false,
        c: true,
        expected: true
    },{
        a: true,
        b: false,
        c: true,
        expected: false
    },{
        a: false,
        b: false,
        c: false,
        expected: true
    }];
    return runTests(exactlyOne, data);
}