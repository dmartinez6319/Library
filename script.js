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
}

const CLONED_CARD = document.querySelector(".card-container").cloneNode(true);

const LIBRARY_CONTAINER = document.querySelector(".container")
function renderBooks() {
    LIBRARY_CONTAINER.replaceChildren();
    const CARD_CONTAINER = document.createElement("div");
    CARD_CONTAINER.classList.add("card-container")
    for (let i in myLibrary) {
        const NEW_CARD = CLONED_CARD.cloneNode(true);
        NEW_CARD.querySelector(".first-line").querySelector("h4").innerHTML = myLibrary[i].title
        NEW_CARD.querySelector(".first-line").querySelector("p").innerHTML = myLibrary[i].pages
        NEW_CARD.querySelector(".second-line").querySelector("p").innerHTML = myLibrary[i].author
        const isRead = NEW_CARD.querySelector(".btn-holder").querySelector(".toggle-btn")
        const DELETE_BTN = NEW_CARD.querySelector(".btn-holder").querySelector(".delete-icon")

        if (myLibrary[i].read === false) {
            isRead.classList.add("not-read-btn");
            isRead.classList.remove("read-btn");
            isRead.innerHTML = "In-Progress"
        }

        isRead.addEventListener("click",() => {
            if (myLibrary[i].read === true) {
                isRead.classList.add("not-read-btn");
                isRead.classList.remove("read-btn");
                isRead.innerHTML = "In-Progress"
                myLibrary[i].read = false;
            } else {
                isRead.classList.add("read-btn");
                isRead.classList.remove("not-read-btn");
                isRead.innerHTML = "Read"
                myLibrary[i].read = true;
            }
        })

        DELETE_BTN.addEventListener("click",() => {
            myLibrary.splice(i,1)
            renderBooks();
        })

        LIBRARY_CONTAINER.append(NEW_CARD)
    }
}

function addBook() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    const newBook = new Book(author,pages,title,read);
    myLibrary.push(newBook);
    renderBooks();
    return newBook;
}

const book1 = new Book("Daniel",32,"The lost one",false)
const book2 = new Book("Leinad",14,"Thalo",true)
const book3 = new Book("Ynnad",33,"Three Musketeers",true)

myLibrary.push(book1,book2,book3)
console.log(myLibrary)
console.log(book1)

const ADD_FORM_BTN = document.querySelector("#add-book-form")
ADD_FORM_BTN.addEventListener("submit",(event) => {
    event.preventDefault();
    MODAL.close();
    console.log(addBook());
})

renderBooks()

// const x = document.createElement("p")
// let text = ""
// for (let i in myLibrary) {
//     text += myLibrary[i].author
// }
// for (let i = 0;i < myLibrary.length;i++) {
//     text += `${myLibrary[i].author} of ${myLibrary[i].title} \n`
// }
// console.log(text)
// x.innerHTML = text
// document.body.append(x)
