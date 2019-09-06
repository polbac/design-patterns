# Repository

- [Volver al índice](../../README.md)

El patrón repositorio se encarga de separar la lógica mediante la cual se accede a los datos almacenados para ser mapeados al modelo de mi negocio o dominio de aplicación, realizar las consultas a la base de datos o impactar nuestra entidad del modelo al origen de datos utilizado. En este sentido nos permite que la capa de negocio sea agnóstica en cierta forma de la tecnología de almacenamiento que se utilice.

```typescript
/////////////////////////////////

export interface IReadeable<T> {
    getList(): Promise<T[]>
    find(id: number): Promise<T>
}

export interface IWritteable<T> {
    create(item: T): Promise<Boolean|Error>
    update(id: number, item: T): Promise<Boolean|Error>
}

/////////////////////////////////

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

/////////////////////////////////
```