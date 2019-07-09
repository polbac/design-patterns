import { IWritteable, IReadeable } from "./RepositoryInterfaces"

type User = {
    id: Number
    name: string
    lastName: string
}

const mockUser: User = {
    id: 1,
    name: 'alvaro',
    lastName: 'garcia bernal'
}

const mockList = (): Promise<User[]> => new Promise(resolve => resolve([mockUser]))

class UserRepository implements IReadeable<User>, IWritteable<User> {
    getList(): Promise<User[]> {
        return mockList()
    }

    find(id: Number): Promise<User> {
        return mockList().then((users: User[]) =>
            users.find((user: User) => user.id = id)
        )
    }

    create(user: User): Promise<Boolean|Error> {
        return new Promise((resolve, reject) => {
            try {
                // create code
                resolve(true)
            } catch(err) {
                reject(err)
            }
            
        })
    }

    update(id: number, user: User): Promise<Boolean|Error> {
        return new Promise((resolve, reject) => {
            try {
                // update code
                resolve(true)
            } catch(err) {
                reject(err)
            }
            
        })
    }
}

export default new UserRepository()

