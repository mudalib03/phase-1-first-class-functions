function receivesAFunction(callback) {
    callback()
}

function  returnsANamedFunction() {
    return function named () {
        console.log("The man is mudalib")
    }

}
function returnsAnAnonymousFunction() {
    return function  () {
        console.log("The man is has no mame")
    }
    
}