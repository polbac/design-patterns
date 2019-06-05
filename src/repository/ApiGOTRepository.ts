class APIGOTRepository implements GOTRepositoryInterface {
 list(): Promise<any> {
    return new Promise((resolve, reject) => {
        resolve([])
    })
 }   
}