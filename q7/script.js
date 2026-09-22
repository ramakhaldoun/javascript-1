let birthYear=prompt("Enter your birth year: ");
let currentYear=2026;
let age=currentYear-birthYear;

if(age>60){
    console.log("You may join the seniors' program.");
}
else if(age>=18 && age<=30){
    console.log("You may join the seniors' program.");
}
else if(age<18){
    console.log("You may join the kids' program.");
}
else if(age>60){
    console.log("You may join the seniors' program.");
}
else if(age>30){
      console.log("You are not eligible. You may join other programs.");
}
else {
    console.log("You may join the kids' program.");
}
