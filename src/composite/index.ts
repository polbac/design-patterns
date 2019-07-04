class Item {
    private childs: Item[] = []
    private name: String = ''

    constructor(name: String) {
        this.name = name
    }

    addChild(item: Item) {
        this.childs.push(item)
    }

    getName() {
        return this.name
    }

    getChilds(): Item[] {
        return this.childs
    }
}

class Menu {
    private items: Item[] = []
    private name: String = ''

    constructor(name: String) {
        this.name = name
    }
    

    addItem(item: Item): void {
        if (item === null) {
            throw new Error('You must pass a item')
        }

        this.items.push(item)
    }

    getName() {
        return this.name
    }

    getItems(): Item[] {
        return this.items
    }
}

const menu = new Menu('File')
const newItem: Item = new Item('New')
const saveItem: Item = new Item('Save')
const exportItem: Item = new Item('Export')
const asDocItem: Item = new Item('As Doc File')
const asPDFItem: Item = new Item('As PDF File')

exportItem.addChild(exportItem)
exportItem.addChild(asPDFItem)

menu.addItem(newItem)
menu.addItem(saveItem)
menu.addItem(exportItem)


