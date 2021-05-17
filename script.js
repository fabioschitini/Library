  let myLibrary1 = [];
  window.addEventListener('load', loadSaved);
  
const Library=(title,author,pages)=>{
    
     return{title,
        author,
        pages,
        }
}

function addBookToLibrary() {
    let title= prompt("What book would you like to find?")
    let author= prompt("Who is the author of the book?")
   let pages= prompt("How many pages does the book have?")
   myLibrary1.push( Library(title,author,pages))
}

function clickButton(){
let btn= document.querySelector("#new")
btn.addEventListener("click",bookDisplay)
let btnn=document.querySelectorAll("#btn")
let btnn2=document.querySelectorAll("#btn2")
btn.addEventListener("click",saveArray)
}

clickButton()
   


function bookDisplay(){
   addBookToLibrary()
    myLibrary1.slice(myLibrary1.length-1).forEach(books=>{
        createBooks.DomInsert(books)
        toogleStatus(books)
        removeBooks(books)   
    } )
}

function saveArray(){
    let myLibrary_serialized=JSON.stringify(myLibrary1)
        localStorage.setItem("myLibrary1",myLibrary_serialized)
        }

function lookForArray(){
    let myLibrary_deserialized=JSON.parse(localStorage.getItem("myLibrary1"))
        myLibrary1=myLibrary_deserialized
}
function loadSaved(){
    lookForArray()
    console.log(myLibrary1)
    myLibrary1.forEach(books=>{
        createBooks.DomInsert(books)
        toogleStatus(books)
        removeBooks(books)   
    })
}
const createBooks=setOnLibrary()

  function setOnLibrary(){
      
      function DomInsert(books){
        let container=document.querySelector("#books");
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
       information3.id=-myLibrary1.indexOf(books)-1
       console.log(information3.id)
           information.textContent=`Author:${books.author}`
           information2.textContent=`Pages:${books.pages}`
           information3.textContent=`Status:Did not read it yet.`
   
           container.appendChild(book)
           book.appendChild(butto)
           book.appendChild(butto2)
           book.appendChild(information)
           book.appendChild(information2)
           book.appendChild(information3)
      }
      
return{
    DomInsert,
}
    }
    function removeBooks(books){
        btnn=document.querySelectorAll("#btn")
       btnn.forEach(function (btnn){ btnn.addEventListener("click",function(){
       let remo=document.getElementById(myLibrary1.indexOf(books).toString())
       myLibrary1.splice(myLibrary1.indexOf(books),1)
       saveArray()
       remo.remove()
   })})
}
    function toogleStatus(books){
        let information3=document.getElementById(`${-myLibrary1.indexOf(books)-1}`)
        console.log(information3)
        let btnn2=document.querySelectorAll("#btn2")
    btnn2.forEach(function (btnn2){ btnn2.addEventListener("click",function(){
       if(information3.textContent===`Status:Did not read it yet.`){
           console.log("if")
           information3.textContent=`Status:Already read it!`
       }
       else if(information3.textContent===`Status:Already read it!`){
        console.log("else if")

        information3.textContent=`Status:Did not read it yet.`
       }
   })})
}

    
  