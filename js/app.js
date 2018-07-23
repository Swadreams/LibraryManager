function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulyssess', author: 'James Joyes', available: true, category: 'Fiction' },
        { id: 2, title: 'A farewell to Arms', author: 'Herman', available: false, category: 'Poetry' },
        { id: 3, title: 'I know why you sing', author: 'MMAM Joyes', available: true, category: 'Poetry' }
    ];
    return books;
}
function LogFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
        }
    }
    console.log('Total Books: ', numberOfBooks);
    console.log('First Available: ', firstAvailable);
}
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
function getBooksByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = Category.Fiction; }
    console.log('Getting Books in Category : ', Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filterdTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === Category[categoryFilter]) {
            filterdTitles.push(currentBook.title);
        }
    }
    return filterdTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookById(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function CreateCustomerId(name, id) {
    return name + id;
}
var poetryBooks = getBooksByCategory(Category.Poetry);
//LogBookTitles(poetryBooks);
var fictionBooks = getBooksByCategory();
fictionBooks.forEach(function (val, idx, arr) { return console.log(++idx + ' - ' + val); });
//LogFirstAvailable(allBooks);
// let x: number = 5
// let IdGenerator: (chars: string, nums : number) => string;
// IdGenerator = CreateCustomerId;
// let myId: string = IdGenerator('daniel', 11);
// console.log(myId);
function CreateCustomer(name, age, city) {
    console.log('Creating Customer : ', name);
    if (age) {
        console.log('Age : ', age);
    }
    if (city) {
        console.log('City :', city);
    }
}
//CreateCustomer('SwapSwap', 6);
/******************************/
function CheckoutBooks(customer) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
    console.log('Checking out books for customer : ', customer);
    var booksCheckOut = [];
    for (var _a = 0, bookIds_1 = bookIds; _a < bookIds_1.length; _a++) {
        var id = bookIds_1[_a];
        var book = GetBookById(id);
        if (book.available) {
            booksCheckOut.push(book.title);
        }
    }
    return booksCheckOut;
}
var myBooks = CheckoutBooks('Throne', 1, 2, 3);
myBooks.forEach(function (title) {
    console.log(title, " ::Available");
});
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == "string") {
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
var hermanBooks = GetTitles('Herman');
hermanBooks.forEach(function (title) { return console.log('Book By Given Author : ', title); });
//# sourceMappingURL=app.js.map