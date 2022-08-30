console.log("this is index.js");

/*----------the Below is a constructor whose work is to make Book type object---------*/
class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}
/*-----------------------------------------*/

// Display function is responsible for displaying the book on the screen
//
function Display() {}

Display.prototype.add = function (book) {
  console.log("Adding to UI");
  tableBody = document.getElementById("tableBody");
  let uiString = `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>`;
  tableBody.innerHTML += uiString;
};
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};
Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};
Display.prototype.show = function (type, displayMessage) {
  let message = document.getElementById("message");
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
  setTimeout(function () {
    message.innerHTML = "";
  }, 2000);
};

let libraryForm = document
  .getElementById("libraryForm")
  .addEventListener("submit", libraryFormSubmit);
// libraryForm.addEventListener("submit", libraryFormSubmit);

/*------ The below function will be executed after submitting the library form-----*/

function libraryFormSubmit(e) {
  console.log("You have submitted library form");
  console.log(e);
  /*-------------Taking the input of bookname , bookauthor and type from user---------*/

  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  console.log(type);

  /*---------------Till now, data is taken from the user-------------*/

  let book = new Book(name, author, type);
  /* Constructor call or object 
  initiation and here we r also 
  giving the arguement for Book function*/
  console.log(Book);
  console.log(book);
  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Successfully Added");
  } else {
    display.show("danger", "Sorry U cannot add this book");
  }
  e.preventDefault();
}
