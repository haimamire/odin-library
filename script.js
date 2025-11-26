const bookLibrary = [];

function Book(id, title, author, pages, readStatus) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
    const bookId = crypto.randomUUID();

    const newBook = new Book(bookId, title, author, pages, readStatus);

    bookLibrary.push(newBook);
}

function displayBookLibrary() {
    const bookContainer = document.querySelector('.container');

    const allBooks = document.querySelectorAll('.book-card');
    allBooks.forEach((node) => { node.remove() });
    
    for (let book of bookLibrary) {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book-card';
        bookDiv.dataset.id = book.id;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";

        for (let key in book) {
            const bookInfo = document.createElement('div');
            bookInfo.textContent = book[key];
            bookDiv.appendChild(bookInfo);
        }
        bookDiv.appendChild(removeBtn);
        bookContainer.appendChild(bookDiv);
    }
}

const addBookBtn = document.querySelector('.add-book-btn');
const newBookDialog = document.querySelector('dialog');

const addBookForm = document.querySelector('form');

addBookForm.addEventListener('submit', (e) => {
    const titleInput = document.querySelector('#title-input');
    const authorInput = document.querySelector('#author-input');
    const pagesInput = document.querySelector('#pages-input');
    const readStatusInput = document.querySelector('input[name="read-status"]:checked');

    addBookToLibrary(
        titleInput.value,
        authorInput.value,
        pagesInput.value,
        readStatusInput.value
    );

    newBookDialog.close();
    addBookForm.reset();
    displayBookLibrary();

    e.preventDefault();
});

addBookBtn.addEventListener('click', () => {
    newBookDialog.showModal();
})

displayBookLibrary();