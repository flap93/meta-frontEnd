//! 1. //
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// !UI constructor
function UI() {}

// !7 .Add Book To List
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  // Create tr element
  const row = document.createElement("tr");
  // Insert columns
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X<a></td>
`;
  list.appendChild(row);
};

//! 8. validation , show alert
UI.prototype.showAlert = function (message, className) {
  // create div
  const div = document.createElement("div");
  // Add classes
  div.className = `alert ${className}`;
  //add text
  div.appendChild(document.createTextNode(message));
  // get parent
  const container = document.querySelector(".container");
  // get form
  const form = document.querySelector("#book-form");
  // insert alert
  container.insertBefore(div, form);
  // time out after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};
//! 2. //
document.getElementById("book-form").addEventListener("submit", function (e) {
  //! 3. // get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  //! 4. //  Instantiate a book object
  const book = new Book(title, author, isbn);

  // !5. Instantiate UI

  const ui = new UI();

  // Validate

  if (title === "" || author === "" || isbn === "") {
    // Error ALERT
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // !6. Add book to list
    ui.addBookToList(book);

    // Show succes

    ui.showAlert("Book added!", "succes");

    // clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// 1. Creamos el constructor temple de book
// 2. seleccionams el buton submit mediante getElementById
// 3. seleccionamos los inputs the title , author, isbn
// 4. instaciamos new book pasando le las variables title, author,    isbn    que cuando hacemos submit capta los valores de los inputs respectivos.

// 5. instanciamos ui object
// 6. mediante el cuanl creamos method addbooklist que le pasamos la variable book que tiene el valor de las otras variables , todo esto lo hacemos mediante prototype
