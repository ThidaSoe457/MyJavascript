// Airline Ticket

// notMember = full price
// normalMember = 5% discount
// silverMember = 10% discount
// goldMember = 15% discount
// platinumMember = 20% discount

let originalPrice=100;
let totalPrice=0;
let memberType="silverMember";

if(memberType == "normalMember"){
    console.log(totalPrice += 100 * 0.95);
}else if(memberType =="silverMember"){
    console.log(totalPrice += 100 * 0.9);
}else if(memberType == "goldMember"){
    console.log(totalPrice += 100 * 0.85);
}else if(memberType == "platinumMember"){
    console.log(totalPrice += 100 * 0.8);
}else {
    console.log(totalPrice += originalPrice);
}


