export default class StudentModel {
    constructor(id, firstName, lastName, address, program) {
        this._id=id;
        this._firstName=firstName;
        this._lastName=lastName;
        this._address=address;
        this._program=program;
    }

    get id() {
        return this._id;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get address() {
        return this._address;
    }
    get program() {
        return this._program;
    }
    set id(id) {
        this._id=id;
    }
    set firstName(firstName) {
        this._firstName=firstName;
    }
    set lastName(lastName) {
        this._lastName=lastName;
    }
    set address(address) {
        this._address=address;
    }
    set program(program) {
        this._program=program;
    }
}
