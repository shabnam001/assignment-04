function sortMaker(arr) {
    let number1 = arr[0];
    let number2 = arr[1];
    if (number1 < 0 || number2 < 0) {
        return "Invalid Input";
    }
    if (number1 == number2) {
        return "equal";
    }
    if (number1 < number2) {
        const temp = number1;
        number1 = number2;
        number2 = temp;
        arr = [number1, number2];
    }
    return arr;
}
console.log(sortMaker([3, 5]));
console.log(sortMaker([-1, 5]));
console.log(sortMaker([5, 5]));
console.log(sortMaker([5, 3]));

