function runFunction(actionName, actions){
    var action = actions[actionName];

    var inA = action.types[0](getInput("A"));
    var inB = action.types[1](getInput("B"));
    var inC = action.types[2](getInput("C"));

    var result = action.function(inA, inB, inC);
    document.getElementById("result").innerHTML = result;
}

function getInput(name) {
    return document.getElementById("input" + name).value;
}

function makeButtons(actions){
    for (const action of Object.entries(actions)) {
        var name = action[0];
        document.getElementById("functions").innerHTML += 
            `<button onclick="runFunction('${name}', actions)">${name}</button>`;
    }
}
makeButtons(actions);