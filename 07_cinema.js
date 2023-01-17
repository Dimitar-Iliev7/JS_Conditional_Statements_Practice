function cinemaTickets(input){
    let typeOfMovie = input[0];
    let numOfRows = Number(input[1]);
    let numOfColumns = Number(input[2]);

    let income = 0;

    if(typeOfMovie == "Premiere"){
        income = numOfRows * numOfColumns * 12.0;
    }
    else if(typeOfMovie == "Normal"){
        income = numOfColumns * numOfRows * 7.50
    }
    else if(typeOfMovie == "Discount"){
        income = numOfColumns * numOfRows * 5.00
    }

    console.log(`${income.toFixed(2)} leva`);
}

cinemaTickets(["Normal", "21", "13"]);


// In a movie theater, the chairs are arranged in a rectangular shape in r rows and c columns. There are three types of screenings with 
// tickets at different prices:
// • Premiere – premiere screening, at a price of BGN 12.00.
// • Normal – standard projection, at a price of BGN 7.50.
// • Discount – screening for children, schoolchildren and students at a reduced price of BGN 5.00.
// Write a function that accepts a screening type (string), number of rows, and number of columns in the hall (integers)
//  and calculates the total ticket revenue for a full house. Print the result in a format like the examples below, with 2 decimal places.

// using toFixed(2) => print the result with two numbers after the decimal point