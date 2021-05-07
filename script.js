window.addEventListener('load', (event) => {
    lookForArray()
  });
  let myLibrary1 = [];
  console.log(myLibrary1)
  
class Library{
    

    constructor(title,author,pages){
        this.title=title
    this.author=author
    this.pages=pages
    }
    
     addBookToLibrary() {
        console.log(myLibrary)

        let title= prompt("What book would you like to find?")
       let author= prompt("Who is the author of the book?")
     let pages= prompt("How many pages does the book have?")
      myLibrary1.push(new Library(title,author,pages))
     }
}
let container=document.querySelector("#books");
let btn= document.querySelector("#new")
btn.addEventListener("click",bookDisplay)
let btnn=document.querySelectorAll("#btn")
let btnn2=document.querySelectorAll("#btn2")
   


function bookDisplay(){
    console.log(myLibrary1)

    let add= new Library
    add.addBookToLibrary()
    
   

    myLibrary1.slice(myLibrary1.length-1).forEach(books=>setOnLibrary(books) )

}

function saveArray(){
    let myLibrary_serialized=JSON.stringify(myLibrary1)
    localStorage.setItem("myLibrary1",myLibrary_serialized)
    
    
}
function lookForArray(){
    let myLibrary_deserialized=JSON.parse(localStorage.getItem("myLibrary1"))
myLibrary=myLibrary_deserialized
}

btn.addEventListener("click",saveArray)


window.onload = () => {

    myLibrary1.forEach(books=>setOnLibrary(books) )
};


  function setOnLibrary(books){
    
        let butto=document.createElement("button") 
        let book=document.createElement("h1") 
        let butto2=document.createElement("button") 
    book.textContent=books.title
    book.id=myLibrary1.indexOf(books)
    butto.id="btn"
    butto2.id="btn2"

    butto.textContent="Delete"
    butto2.textContent="Toogle"

    let information=document.createElement("p") 
    let information2=document.createElement("p")
    let information3=document.createElement("p") 
    information.textContent=`Author:${books.author}`
    information2.textContent=`Pages:${books.pages}`
    information3.textContent=`Status:Did not read it yet.`

    container.appendChild(book)
    book.appendChild(butto)
    book.appendChild(butto2)
    book.appendChild(information)
    book.appendChild(information2)
    book.appendChild(information3)

     btnn=document.querySelectorAll("#btn")
     btnn.forEach(function (btnn){ btnn.addEventListener("click",function(){
        let remo=document.getElementById(myLibrary1.indexOf(books).toString())
        remo.remove()
    })})

    btnn2=document.querySelectorAll("#btn2")
    btnn2.forEach(function (btnn2){ btnn2.addEventListener("click",function(){
       if(information3.textContent===`Status:Did not read it yet.`){
           information3.textContent=`Status:Already read it!`
           book.appendChild(information3)

       }
       else if(information3.textContent===`Status:Already read it!`){
        information3.textContent=`Status:Did not read it yet.`
           book.appendChild(information3)

       }
   })})

    }
  