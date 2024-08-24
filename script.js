const myLibrary = [];

const ADD_BUTTON = document.querySelector("#add-btn");
const MODAL = document.querySelector("#book-modal");
const CLOSE_BUTTON = document.querySelector(".exit-icon")

ADD_BUTTON.addEventListener("click",() => {
    MODAL.showModal();
})

CLOSE_BUTTON.addEventListener("click", () => {
    MODAL.close();
})

function Book(author, pages, title, read) {
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.title = title
    this.tostring = () => {
        return "hello"
    }
}

function addBook() {

}

const book1 = new Book("Daniel",32,"The lost one",false)
const book2 = new Book("Leinad",14,"Thalo",true)
const book3 = new Book("Ynnad",33,"Three Musketeers",true)

myLibrary.push(book1,book2,book3)
console.log(myLibrary)
console.log(book1)

const x = document.createElement("p")
let text = ""
// for (let i in myLibrary) {
//     text += myLibrary[i].author
// }
for (let i = 0;i < myLibrary.length;i++) {
    text += `${myLibrary[i].author} of ${myLibrary[i].title} \n`
}
console.log(text)
x.innerHTML = text
document.body.append(x)
