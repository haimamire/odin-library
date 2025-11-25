const bookLibrary = [
    {
        title: 'aaa',
        author: 'aa',
        pages: 1,
        readStatus: false,
    },
    {
        title: 'aaa',
        author: 'aa',
        pages: 1,
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

}

function displayBookLibrary() {
    const bookContainer = document.querySelector('.container');
    
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

displayBookLibrary();