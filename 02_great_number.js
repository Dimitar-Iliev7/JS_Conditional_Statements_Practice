function greatNumber(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}

greatNumber(["5", "3"]);

// To write a function that receives two integers and prints the larger of the two.