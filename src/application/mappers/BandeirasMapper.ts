export default class BandeirasMapper {
    constructor(private readonly bandeira: string[]) {}

    toObject() {
        const [ id, description ] = this.bandeira;

        const bandeiraObj =  {
            id: Number(id),
            description,
        }

        return bandeiraObj;
    }
}