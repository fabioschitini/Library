
let myLibrary1 = [0];
  window.addEventListener('load', loadSaved);
  
const Library=(title,author,pages)=>{
    
     return{title,
        author,
        pages,
        }
}

function addBookToLibrary() {
    let title= document.getElementById("title")
    let author=  document.getElementById("author")
    let pages = document.getElementById("pages")
    console.log(title.value)
    myLibrary1.push(Library(title.value, author.value, pages.value))
}

function clickButton() {
    let btn = document.querySelector("form")
    btn.addEventListener("submit", addBookToLibrary)
btn.addEventListener("submit",saveArray)
}

clickButton()
   




function saveArray(){
    let myLibrary_serialized=JSON.stringify(myLibrary1)
        localStorage.setItem("myLibrary1",myLibrary_serialized)
        }

function lookForArray(){
    let myLibrary_deserialized=JSON.parse(localStorage.getItem("myLibrary1"))
        myLibrary1=myLibrary_deserialized
}
function loadSaved() {
    console.log(myLibrary1)
    if (myLibrary1) {
    console.log(myLibrary1)
        lookForArray()
            console.log(myLibrary1)
    myLibrary1.forEach(books=>{
        createBooks.DomInsert(books)
        toogleStatus()
        removeBooks()   
    })  
    }
    
}
const createBooks=setOnLibrary()

  function setOnLibrary(){
      
      function DomInsert(books){
         
        let container=document.querySelector("#books");
        let butto=document.createElement("button") 
       let book=document.createElement("h1") 
          let butto2 = document.createElement("button") 
          let white=document.createElement("div")
           book.textContent=books.title
          book.id = books.title
          book.className="book"
           butto.id="btn"
           butto2.id="btn2"
           white.className="white"
   
           butto.textContent="Delete"
           butto2.textContent="Toogle"
   
       let information=document.createElement("p") 
       let information2=document.createElement("p")
       let information3=document.createElement("p") 
       information3.id=`${books.title}1`
           information.textContent=`Author:${books.author}`
           information2.textContent=`Pages:${books.pages}`
           information3.textContent=`Status:Did not read it yet.`
   
           container.appendChild(book)
           book.appendChild(butto)
           book.appendChild(butto2)
           book.appendChild(information)
           book.appendChild(information2)
          book.appendChild(information3)
             book.appendChild(white)

      }
      
return{
    DomInsert,
}
    }
    function removeBooks(){
       let btnn=document.querySelectorAll("#btn")
        btnn.forEach(function (btnn) {
            btnn.addEventListener("click", function (e) {
                console.log(e.path[1].id)
                
             
                   
       let remo=document.getElementById(e.path[1].id)
       remo.remove()
       myLibrary1=myLibrary1.filter(book=>book.title!==e.path[1].id)
       saveArray()
   })})
}
    function toogleStatus(){
      
        let btnn2=document.querySelectorAll("#btn2")
        btnn2.forEach(function (btnn2) {
            btnn2.addEventListener("click", function (e) {
                console.log(e.path[1].id)
          let information3=document.getElementById(`${e.path[1].id}1`)
       if(information3.textContent===`Status:Did not read it yet.`){
           information3.textContent=`Status:Already read it!`
       }
       else if(information3.textContent===`Status:Already read it!`){

        information3.textContent=`Status:Did not read it yet.`
       }
   })})
    }


    
toogleStatus()
 removeBooks()