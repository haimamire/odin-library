const bookLibrary = [];

function Book(id, title, author, pages, readStatus) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title) {
    const bookId = crypto.randomUUID();

    const newBook = new Book(bookId, title, 'porongosa', '0', true);

    bookLibrary.push(newBook);
}

function displayBookLibrary() {
    const bookContainer = document.querySelector('.container');

    const allBooks = document.querySelectorAll('.book-card');
    allBooks.forEach((node) => { node.remove() });
    
    for (let book of bookLibrary) {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book-card';

        for (let key in book) {
            const bookInfo = document.createElement('div');
            bookInfo.textContent = book[key];
            bookDiv.appendChild(bookInfo);
        }
        bookContainer.appendChild(bookDiv);
    }
}

const addBookBtn = document.querySelector('.add-book-btn');
const newBookDialog = document.querySelector('dialog');

const addBookForm = document.querySelector('form');

addBookForm.addEventListener('submit', (e) => {
    const titleInput = document.querySelector('#title-input');
    addBookToLibrary(
        titleInput.value,
    );

    newBookDialog.close();
    displayBookLibrary();
    e.preventDefault();
});

addBookBtn.addEventListener('click', () => {
    newBookDialog.showModal();
})

displayBookLibrary();