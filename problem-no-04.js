function findAddress(obj){
    if(typeof obj !== "object"){
        return "Please provide a valid object";
    }
    else{
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";

        return street+","+house+","+society;
    }
}
let address = {
    street: 0,
    house: "15A",
    society: "Earth Perfect"
}
console.log(findAddress(address));