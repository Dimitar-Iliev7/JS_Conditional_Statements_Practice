function numbers(input) {
    let num = Number(input[0]);
    if (num <= 100) {
        console.log("Less than 100")
    }
    if (num >= 100 && num <= 200) {
        console.log("Between 100 and 200")
    }
    if (num > 200) {
        console.log("greater than 200")
    }
}

numbers(["5000"]);


// Write a function that takes an integer and checks whether it is less than 100, between 100 and 200, or greater than 200. If the number is:
// • under 100 print: "Less than 100"
// • between 100 and 200 print: "Between 100 and 200"
// • greater than 200 print: "Greater than 200"