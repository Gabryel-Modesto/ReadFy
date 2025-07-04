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

    updateBook(newTitleBook,newAuthorBook, newDescriptionBook, newYearPublicBook, newCategoryBook, newCoverBook) {
        this.titleBook = newTitleBook;
        this.authorBook = newAuthorBook;
        this.descriptionBook = newDescriptionBook;
        this.yearPublicBook = newYearPublicBook;
        this.categoryBook = newCategoryBook;
        this.coverBook = newCoverBook;
    }
    
};

export default Book;

