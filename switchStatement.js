let mark=prompt("Enter Your Mark : ");
switch(true){
    case(mark > 80 && mark <= 100) : alert("Your Grade is A");
        break;
    case(mark > 60 && mark <= 80) : alert("Your Grade is B");
        break;
    case(mark > 40 && mark <= 60) : alert("Your Grade is C");
        break;
    case(mark > 20 && mark <= 40) : alert("Your Grade is D");
        break;
    case(mark >= 0 && mark <= 20) : alert("Your Grade is E");
        break;
    default:alert("Your Mark invalid"); break;
}