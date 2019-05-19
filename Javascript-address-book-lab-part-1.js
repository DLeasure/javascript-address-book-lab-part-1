class Contact {
    constructor (name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class AddressBook {
    constructor () {
        this.contacts = [new Contact("Jonah", "JNye@GrandCircus.edu", "586-898-0114", "Kind Grader"), new Contact("Scott", "SRush@Wayne.edu", "313-210-8900", "Friend")];
    }

    addContact(user) {
        this.contacts.push(user);
    }

    gatherContactInfo() {
        const name = prompt("Name?");
        const email = prompt("Email?");
        const phone = prompt("Phone?");
        const relation = prompt("Relation?");
        return new Contact(name, email, phone, relation);
    }

    deleteContactAt(index) {
        this.contacts.splice(index,1);
    }

    promptForDeleteIndex() {
        return prompt("Index to delete?");
    }

    findIndexByUser(nameToDelete) {
        for (let index = 0; index < this.contacts.length; index++) {
            if (this.contacts[index]["name"] === nameToDelete) {
                return index;
            }
        }
    }

    promptForDeleteUserByName() {
        let nameToDelete = prompt("Name to delete?");
        return this.findIndexByUser(nameToDelete);
    }

    print() {
        for (let index = 0; index < this.contacts.length; index++) {
            console.log(`${index}. ${this.contacts[index]["name"]} P: ${this.contacts[index]["phone"]} E: ${this.contacts[index]["email"]} R: ${this.contacts[index]["relation"]}`);
        }
    }
}

function loop(addressBookName) {
    let end = false;
    while (end === false) {
        let action = prompt("Add, Delete by index, Delete by name, Print, or Quit?");
        switch (action) {
            case "Add":
            case "add":
                addressBookName.addContact(addressBookName.gatherContactInfo());
                break;
            case "Delete by index":
            case "delete by index":
                addressBookName.deleteContactAt(addressBookName.promptForDeleteIndex());
                break;
            case "Delete by name":
            case "delete by name":
                addressBookName.deleteContactAt(addressBookName.promptForDeleteUserByName());
                break;
            case "Print":
            case "print":
                addressBookName.print();
                break;
            case "Quit":
            case "quit":
                end = true;
                break;
            default:
                console.log(action + " command not supported.")

        }
    }
}

let myAddressBook = new AddressBook();
// myAddressBook.addContact(myAddressBook.gatherContactInfo());
// myAddressBook.deleteContactAt(myAddressBook.promptForDeleteIndex());
// myAddressBook.print();

// console.log(myAddressBook);
loop(myAddressBook);

// console.log(myAddressBook.promptForDeleteUserByName());
