let bookLibrary = [];

function Book(id, title, author, pages, readStatus) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

Book.prototype.changeReadStatus = function() {
    this.readStatus === true ? this.readStatus = false : this.readStatus = true;
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

        for (let key in book) {
            if (book.hasOwnProperty(key)) {
                const bookInfo = document.createElement('div');
                bookInfo.textContent = book[key];
                bookDiv.appendChild(bookInfo);
            }
        }

        const removeBtn = document.createElement('button');
        removeBtn.className = "remove-button";
        removeBtn.textContent = "Remove";
        bookDiv.appendChild(removeBtn);

        const changeStatusBtn = document.createElement('button');
        changeStatusBtn.className = "change-status-button";
        changeStatusBtn.textContent = "Change status";
        bookDiv.appendChild(changeStatusBtn);

        removeBtn.addEventListener('click', () => {
            removeBook(book.id)
        });

        changeStatusBtn.addEventListener('click', () => {
            changeStatus(book)
        });

        bookContainer.appendChild(bookDiv);
    }
}

function removeBook(id) {
    bookLibrary = bookLibrary.filter(item => item.id !== id);
    document.querySelectorAll('.book-card').forEach(
        (item) => {
            if (item.dataset.id === id) item.remove();
        }
    )
}

function changeStatus(book) {
    book.changeReadStatus();
    displayBookLibrary();
}

const addBookBtn = document.querySelector('.add-book-btn');
const newBookDialog = document.querySelector('dialog');
const addBookForm = document.querySelector('form');


addBookBtn.addEventListener('click', () => {
    newBookDialog.showModal();
})


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


displayBookLibrary();