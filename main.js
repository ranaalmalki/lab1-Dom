


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
let table = document.createElement("table")
table.setAttribute("aa" , "mytable")
document.body.appendChild(table); 


let trr = document.createElement("tr")

let td = document.createElement("td")

table.appendChild(tr)
tr.appendChild(td)
td.textContent="fff"


