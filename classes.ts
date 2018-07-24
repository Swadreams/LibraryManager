import { Book, DamageLogger, Author, Librarian} from './interfaces';

export class UnitversityLibrarian implements Librarian {
    name: string;
    email:string;
    department: string;
    assistCustomer(custName: string) {
        console.log(this.name, ' is assisting ', custName);
    }

}
