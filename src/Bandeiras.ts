export default class Bandeiras {
    constructor(private readonly contentArr) {}

    toObject() {
        const [id, description] = this.contentArr;

        return {
            id: Number(id),
            description
        }
    }
}