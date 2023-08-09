function findAdress(obj){
    if(typeof obj !== "object"){
        return "Please provide a valid object";
    }
    else{
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";

        return street+","+house+","+society;
    }
    // return obj.street+","+obj.house+","+obj.society;
}

let addres = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
}
console.log(findAdress(addres));