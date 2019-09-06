# Mediator

- [Volver al índice](../../README.md)

El patrón mediador define un objeto que encapsula cómo un conjunto de objetos interactúan. Este patrón de diseño está considerado como un patrón de comportamiento debido al hecho de que puede alterar el comportamiento del programa en ejecución.

```
 -------     ---------      ---------      ---------
| Chat  |   | Person1 | <> | Person2 | <> | PersonN |
 -------     ---------      ---------      ---------
```

De este modo el Mediador (chat) media entre las distintas personas para que puedan enviar sus mensajes

```typescript
/////////////////////////////////


class Person {
    name: string
    id: string

    constructor(name: string) {
        this.name = name
        this.id = `${this.name}-${Math.round(+new Date() / 1000)}`
    }

    onReceiveMessage(message: Message) {
        console.log(`
            ${message.from.name} > ${this.name}: ${message.text}
        `)
    }
}

/////////////////////////////////

class Message {
    from: Person
    target: Person
    text: string

    constructor(from: Person, target: Person, text: string) {
        this.from = from
        this.target = target
        this.text = text
    }
}

/////////////////////////////////

class Chat {
    persons: Array<Person> = []
    messages: Array<Message> = []

    constructor() {}

    registerPerson(person: Person) {
        if (this.persons.find((p: Person) => p.id === person.id) !== undefined) {
            throw new Error('Person already exist')
        }
        this.persons.push(person)
    }

    sendMessage(message: Message) {
        if (!this.isPersonRegister(message.from) || !this.isPersonRegister(message.target)) {
            throw new Error('Users invalid')
        }

        this.messages.push(message)

        message.target.onReceiveMessage(message)
    }

    isPersonRegister(person: Person): boolean {
        return this.persons.find((p: Person) => p.id === person.id) !== null
    }
}

/////////////////////////////////

const chat = new Chat();

const alan = new Person('Alan')
chat.registerPerson(alan)

const alvaro = new Person('Alvaro')
chat.registerPerson(alvaro)

chat.sendMessage(new Message(alan, alvaro, 'es upselling'))
chat.sendMessage(new Message(alvaro, alan, 'es cart'))

/////////////////////////////////
```