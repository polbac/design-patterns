export interface IReadeable<T> {
    getList(): Promise<T[]>
    find(id: number): Promise<T>
}

export interface IWritteable<T> {
    create(item: T): Promise<Boolean|Error>
    update(id: number, item: T): Promise<Boolean|Error>
}