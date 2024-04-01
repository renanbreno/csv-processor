import BandeirasRepository from "../../../application/respository/BandeirasRepository";
import BandeiraModel from "../../../domain/models/BandeiraModel";

export default class InMemoryBandeirasRepository implements BandeirasRepository {
    data = [];

    constructor() {}
    async save(bandeira: BandeiraModel): Promise<void> {
        this.data.push({
            id: bandeira.id,
            descricao: bandeira.description
        })
    }

    async getAll(): Promise<BandeiraModel[]> {
        const bandeiras = [];
        for (const bandeiraData of this.data) {
            bandeiras.push(new BandeiraModel({
                id: bandeiraData.id,
                description: bandeiraData.descricao
            }))
        }

        return bandeiras;
    }

}