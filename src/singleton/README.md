# Singleton

- [Volver al índice](../../README.md)

Es un patrón de diseño que permite restringir la creación de objetos pertenecientes a una clase o el valor de un tipo a un único objeto.

Su intención consiste en garantizar que una clase solo tenga una instancia y proporcionar un punto de acceso global a ella.

```typescript
/////////////////////////////////

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

/////////////////////////////////
```