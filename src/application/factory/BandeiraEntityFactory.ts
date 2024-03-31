import Bandeira from "../../domain/entity/Bandeira";
import BandeirasMapper from "../mappers/BandeirasMapper";
import BandeirasRepository from "../respository/BandeirasRepository";
import EntityFactory from "./EntityFactory";

export default class BandeiraEntityFactory implements EntityFactory {
    constructor(private readonly bandeiraRepository: BandeirasRepository) {}
    async processCsv(content: string[]): Promise<void> {
        const bandeirasMapper = new BandeirasMapper(content);
        const bandeiraObj = bandeirasMapper.toObject();
        const bandeira = new Bandeira(bandeiraObj);
        await this.bandeiraRepository.save(bandeira);
    }
    
}