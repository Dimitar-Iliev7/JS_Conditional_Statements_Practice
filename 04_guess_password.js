function password(input) {
    let pass = input[0];
    if (pass == "secret") {
        console.log("welcome")
    } else {
        console.log("wrong")
    }
}

password(["secret"]);


// Write a function that receives a password (text) and checks if the given password matches the phrase "s3cr3t!P@ssw0rd". If there is a match, display "Welcome". In case of mismatch, display "Wrong password!".