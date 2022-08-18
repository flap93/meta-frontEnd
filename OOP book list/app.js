//! 1. //
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// !UI constructor
function UI() {}

// !Add Book To List
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  // Create tr element
  const row = document.createElement("tr");
  console.log(tr);
};

//! 2. //
document.getElementById("book-form").addEventListener("submit", function (e) {
  //! 3. // get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  //! 4. //  Instantiate a book object
  const book = new Book(title, author, isbn);

  // !5. Instantiate a UI

  const ui = new UI();

  // !6. Add book to list

  ui.addBookToList(book);

  e.preventDefault();
});

// 1. Creamos el constructor temple de book
// 2. seleccionams el buton submit mediante getElementById
// 3. seleccionamos los inputs the title , author, isbn
// 4. instaciamos new book pasando le las variables title, author,    isbn    que cuando hacemos submit capta los valores de los inputs respectivos.

// 5. instanciamos ui object
// 6. mediante el cuanl creamos method addbooklist que le pasamos la variable book que tiene el valor de las otras variables , todo esto lo hacemos mediante prototype
