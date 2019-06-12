
class Person {
    name: string
    id: number
    constructor(name) {
        this.id = (new Date()).getTime()
        this.name = name
    }
}

class Chat {

}

class ChatMediator {
    persons: Array<Person> = []
    chats: Array<Chat> = []

    constructor() {}

    registerPerson(person: Person) {
        if (this.persons.find((p: Person) => p.id === person.id)) {
            throw new Error('Person already exist')
        }
        this.persons.push(person)
    }
}

