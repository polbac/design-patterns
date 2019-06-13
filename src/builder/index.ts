class BannerHappybirthdate {
    firstName: string
    lastName: string
    years: number

    constructor(firstName: string, lastName: string, years: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.years = years
        
        return `
            🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂
            🎂🎂 ${this.firstName} ${this.lastName} happy birthdate (${this.years}) 🎂🎂🎂
            🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂
        `
    }

}