let username=prompt("please enter your name");

let membership=prompt("please enter your membership type(student or regular)");

if(membership=="regular"){
    alert("welcome scholar" +username+ "!");
}
else if(membership=="student"){
    alert("welcome memeber" +" " + username+ "!");
}
else {
    alert("welcome" + username+ "!");
}

let genre=prompt("Do you prefer fiction or non-fiction books?");
let title=prompt("write the title of the book you want to borrow");

alert("Your book" + " " + title + " " + "is reserved for you.");

console.log(username+ " " + "has reserved the book" + " " + title);

