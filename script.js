for(var a = 1; a <= 15; a++){
    
    var output = ""
    if(a % 3 == 0 && a % 5 == 0) {
        output += "fizzbuzz"
    }else if (a % 5 == 0) {
        output += "buzz"
    }else if (a % 3 == 0){
        output += "fizz"
    }else {
        output += a
    }
        console.log(output)
}
