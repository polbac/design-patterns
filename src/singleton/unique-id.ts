class UniqueIdSingleton {
    private static instance: UniqueIdSingleton
    private id = Math.random()

    static getInstance() {
        if (!UniqueIdSingleton.instance) {
            UniqueIdSingleton.instance = new UniqueIdSingleton()
        }
        return UniqueIdSingleton.instance;
    }

    public getId() {
        return this.id
    }
 }

export default UniqueIdSingleton.getInstance()