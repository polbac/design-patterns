# Factory

- [Volver al índice](../../README.md)

En diseño de software, el patrón de diseño Factory Method consiste en utilizar una clase constructora (al estilo del Abstract Factory) abstracta con unos cuantos métodos definidos y otro(s) abstracto(s): el dedicado a la construcción de objetos de un subtipo de un tipo determinado. Es una simplificación del Abstract Factory, en la que la clase abstracta tiene métodos concretos que usan algunos de los abstractos; según usemos una u otra hija de esta clase abstracta, tendremos uno u otro comportamiento.

```typescript
/////////////////////////////////

class Api {
    private baseURL: string

    constructor(baseURL: string) {
        if (baseURL === null) {
            throw new Error('You must pass a baseURL')
        }

        this.baseURL = baseURL
    }

    get(parameters) {
        return fetch(this.baseURL, {
            method: 'GET'
        })
    }

    post(body) {
        return fetch(this.baseURL, {
            method: 'POST',
            body
        })
    }
}

/////////////////////////////////

enum APIType {
    DOGS,
    CATS,
}

class ApiFactory {
    private apiBaseURLs = {
        [APIType.DOGS]: 'http://www.dogs.ccom/api',
        [APIType.CATS]: 'http://www.cats.ccom/api',
    } 

    private cache = {}

    constructor(type: APIType) {
        if (this.cache[type] === null) {
            this.cache[type] = new Api(this.apiBaseURLs[type])
        }

        return this.cache[type]
        
    }
}

/////////////////////////////////
```