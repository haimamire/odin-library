const bookLibrary = [
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
        for (let key in book) {
            const bookInfo = document.createElement('div');
            bookInfo.textContent = book[key];
            bookContainer.appendChild(bookInfo);
        }
    }
}

displayBookLibrary();