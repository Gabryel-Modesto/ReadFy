class Book {
    constructor(titleBook, authorBook, descriptionBook, yearPublicBook, categoryBook, coverBook) {
        this.titleBook = titleBook;
        this.authorBook = authorBook;
        this.descriptionBook = descriptionBook;
        this.yearPublicBook = yearPublicBook;
        this.categoryBook = categoryBook;
        this.coverBook = coverBook;
    };

    informationsDisplay() {
        return `${this.titleBook} - ${this.authorBook} - ${this.descriptionBook} - ${this.yearPublicBook} - ${this.categoryBook} - ${this.coverBook}`
    };
};

export default Book;

