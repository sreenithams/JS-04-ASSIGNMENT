/*let val=20
if (val < 5){
    console.log("tiny");
}
else if(val < 10) {
    console.log("small");

}
else if (val < 15){
    console.log("medium");
}
else if (val < 20){
    console.log("large")
}
else{
    console.log("huge")
}*/


let access="subAdmin"
switch(access){
    case"admin":
console.log("Get Full Access");
break;
case"subAdmin":
console.log("Get Access To Create and Delete Courses");
break;
case"testPrep":
console.log("Get Access To Create and Delete Tests");
break;
case"user":
console.log("Get Access To Consume Contents");
break;
default:
    console.log("Wrong Choice");
    break;
}