


document.getElementById("name1").style.color = "white";
document.getElementById("name1").style.backgroundColor = "green";

// document.getElementsByClassName('name1')[0].style. = 'green';

document.getElementById("paragraph").style.fontWeight = "bold";

document.querySelector("img").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFfp5zWm4XL0JpKJmA3Q2ZHi0pYDLfcslLBQ&s"

let ul =document.querySelector("ul")
let li =document.createElement("li")
let li2=document.createElement("li")
let li3=document.createElement("li")

ul.style.border="1px solid black"
ul.appendChild(li)
ul.appendChild(li2)
ul.appendChild(li3)

li.textContent = "somthing"
li2.textContent="nothing"
li3.textContent="nothing"

li.style.color="green"
li2.style.color="green"
li3.style.color="green"

//DRY ????
let divt =document.querySelector("div")
let table = document.createElement("table")

table.setAttribute("class" ,"tablestyle")
divt.appendChild(table)

let row = table.insertRow(0)
let row1 = table.insertRow(1)
row.setAttribute("class","row-bold")
//DRY ????


let col1 = row.insertCell(0)
let col2 = row.insertCell(1)
let col3 = row.insertCell(2)

col1.innerText="fname "
col2.innerText="lname"
col3.innerText="hobby"

let col11 =row1.insertCell(0)
let col12 =row1.insertCell(1)
let col13 =row1.insertCell(2)

col11.innerText="Rana"
col12.innerText="Almalki"
col13.innerText="video game"

