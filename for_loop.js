let myGrades = [4, 5, 5, 3, 2, 2, 3, 4, 5];
for (let b = myGrades.length; b > 1; b--) {
    console.log(myGrades[b]);
}

//-----------------------------------------------------


let books = ["Cinderella", "Harry Potter", "The Little Prince"];
for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
}

let cars = ["Porsche", "BMW", "BYD", "Mercedes", "Maserati"];
for (let v = cars.length; v >= 0; v--) {
    console.log(cars[v]);
}

//-----------------------------------------------------

let students = [
    {
        name:"Anastassia",
        age: 23,
        course: 4,
    },
    {
        name: "Ilya",
        age: 24,
        course: 4,
    },
];
for (let i = 0; i < students.length; i++) {
    console.log(students[i].course);
}

let shoppingList = [
    ["молоко", "хлеб", "яйца"],
    ["сок", "мороженое"],
    ["корм для кота", "шампунь"],
]

for (let i = 0; i < shoppingList.length; i++) {
    let subArray = shoppingList[i];
    document.write("List ", i + 1, "<br>");
    document.write("--------", "<br>");
    for (let j = 0; j < subArray.length; j++) {
        let product = subArray[j];
        document.write(j + 1, "-", product, '<br>');
    }
    document.write('<br>');
}