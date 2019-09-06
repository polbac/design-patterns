# Builder

- [Volver al índice](../../README.md)

El patrón de diseño Builder separa la creación de un objeto complejo de su representación de modo que el mismo proceso de construcción pueda crear representaciones diferentes.


```
 ----------------------     -----------------------------  
| BannerHappybirthdate |   | BannerHappybirthdateBuilder | 
 ----------------------     -----------------------------
```

```typescript
/////////////////////////////////

class BannerHappybirthdate {
    firstName: string
    lastName: string
    years: number

    constructor(firstName: string, lastName: string, years: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.years = years
    }

    showBanner() {
        console.log(`
            🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂
            🎂🎂 ${this.firstName} ${this.lastName} happy birthdate (${this.years}) 🎂🎂🎂
            🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂
        `)
    }


}

/////////////////////////////////

class BannerHappybirthdateBuilder {
    firstName: string
    lastName: string
    years: number

    withFirtName(name: string) {
        this.firstName = name
        return this
    }

    withLastName(lastName: string) {
        this.lastName = lastName
        return this
    }

    withYears(years: number) {
        this.years = years
        return this
    }

    build() {
        const birthdate = new BannerHappybirthdate(this.firstName, this.lastName, this.years)
        return birthdate.showBanner()
    }
}

/////////////////////////////////

/* const banner = new BannerHappybirthdate('John', 'Adams', 70)
banner.showBanner() */

const bannerWithBuilder = new BannerHappybirthdateBuilder()

bannerWithBuilder
    .withFirtName('John')
    .withLastName('Adams')
    .withYears(70)
    .build()

/////////////////////////////////
```