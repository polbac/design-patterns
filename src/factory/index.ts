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