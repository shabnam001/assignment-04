function canPay(changeArray, totalDue) {
    if(changeArray[0] == null){
        return 'please provide an element'
    }
    let sum = 0;
    for(let i = 0; i < changeArray.length; i++){
        const index = i;
        const element = changeArray[index];
        sum = sum + element;
    }
    if(sum >= totalDue){
        return true;
    }
    if(sum < totalDue){
        return false;
    }
    
}
let arr = [5, 5, 5];
console.log(canPay(arr, 10));
