export default class BandeiraModel {
    id: number
    description: string

    constructor(private readonly bandeiras) {
        Object.assign(this, this.bandeiras)
    }
}