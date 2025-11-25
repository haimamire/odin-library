const bookLibrary = [
    {
        title: 'aaa',
        author: 'aa',
        pages: 1,
        readStatus: false,
    },
    {
        title: 'bbb',
        author: 'bb',
        pages: 2,
        readStatus: false,
    },
];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary() {
    const newBook = new Book('poronga', 'porongosa', '0', true);

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

addBookBtn.addEventListener('click', (e) => { 
    addBookToLibrary();
    displayBookLibrary();
})

displayBookLibrary();
