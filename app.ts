function GetAllBooks() {
    
    let books = [
        { id: 1, title: 'Ulyssess', author: 'James Joyes', available: true, category: 'Fiction'},
        { id: 2, title: 'A farewell to Arms', author: 'Herman', available: false, category: 'Poetry'},
        { id: 3,  title: 'I know why you sing', author: 'MMAM Joyes', available: true, category: 'Poetry'}
    ];

    return books;
}

function LogFirstAvailable(books: any): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for(let currentBook of books) {        
        if(currentBook.available) {
            firstAvailable = currentBook.title;
        }
    }

    console.log('Total Books: ', numberOfBooks);
    console.log('First Available: ', firstAvailable);
}

enum Category { Biography, Poetry, Fiction, History, Children}


function getBooksByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
    console.log('Getting Books in Category : ', Category[categoryFilter])

    const allBooks =  GetAllBooks();
    const filterdTitles: string[] = [];

    for(let currentBook of allBooks) {
        if(currentBook.category === Category[categoryFilter]) {
            filterdTitles.push(currentBook.title);
        }
    }

    return filterdTitles;
}

function LogBookTitles(titles: string[]): void {
    for(let title of titles) {
        console.log(title);
    }
}

function GetBookById(id: number) {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerId(name: string, id: number): string {
    return name + id;
}

const poetryBooks = getBooksByCategory(Category.Poetry);
//LogBookTitles(poetryBooks);

const fictionBooks = getBooksByCategory();

fictionBooks.forEach((val, idx, arr ) => console.log(++idx + ' - ' + val));

//LogFirstAvailable(allBooks);


// let x: number = 5
// let IdGenerator: (chars: string, nums : number) => string;
// IdGenerator = CreateCustomerId;

// let myId: string = IdGenerator('daniel', 11);
// console.log(myId);

function CreateCustomer(name: string, age?: number, city ?: string): void {
    console.log('Creating Customer : ', name);

    if(age) {
        console.log('Age : ', age);
    }

    if(city) {
        console.log('City :' , city);
    }
}

//CreateCustomer('SwapSwap', 6);

/******************************/

function CheckoutBooks(customer: string, ...bookIds: number[]): string[] {
    console.log('Checking out books for customer : ', customer);

    let booksCheckOut: string[] = [];

    for(let id of bookIds) {
        let book = GetBookById(id);
        if(book.available) {
            booksCheckOut.push(book.title);
        }
    }

    return booksCheckOut;
}

let myBooks: string[] = CheckoutBooks('Throne', 1,2,3);

myBooks.forEach(title => {
    console.log(title, " ::Available");
});


/***
 * Overloading Function
 */

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];

    if(typeof bookProperty == "string") {
        for(let book of allBooks) {
            if(book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    else if(typeof bookProperty == 'boolean') {
        for(let book of allBooks) {
            if(book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}

let hermanBooks = GetTitles('Herman');
hermanBooks.forEach(title => console.log('Book By Given Author : ', title));