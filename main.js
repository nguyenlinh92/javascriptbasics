function count(firstNum, secondNum) {
    console.log(firstNum + secondNum);
}

function deduct(firstNum, secondNum, message) {
    console.log(message + " " + (firstNum - secondNum));
}

function compare(firstNum, secondNum) {
    if (firstNum == secondNum) {
        console.log(firstNum + " equals " + secondNum);
    } else {
        console.log(firstNum + " does not equal " + secondNum);
    }
}

// 2 == 2
// true
// 2 === 2
// true
// 2 == "2"
// true
// 2 === "2"
// false
// 2 === Number("2")
// true
