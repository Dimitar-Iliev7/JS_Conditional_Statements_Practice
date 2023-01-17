function speeding(input) {
    let speed = Number(input[0]);
    if (speed <= 10) {
        console.log("slow")
    }
    if (speed >= 10 && speed <= 50) {
        console.log("avarage")
    }
    if (speed >= 50 && speed <= 150) {
        console.log("fast")
    }
    if (speed >= 150 && speed <= 1000) {
        console.log("ultra fast")
    }
    if (speed >= 1000) {
        console.log("exreme")
    }
}

speeding(["5000"])



// To write a function that receives velocity (a real number) and prints information about the velocity.
// • For speed up to 10 (inclusive) print "slow"
// • For speed over 10 and up to 50 (inclusive) print "average"
// • For speed over 50 and up to 150 (inclusive) print "fast"
// • For speed over 150 and up to 1000 (inclusive) print "ultra fast"
// • For higher speed, print "extremely fast"