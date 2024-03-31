import BandeiraEntityFactory from "../../application/factory/BandeiraEntityFactory";
import CanalVendaEntityFactory from "../../application/factory/CanalVendaEntityFactory";
import EntityFactory from "../../application/factory/EntityFactory";
import BandeirasRepository from "../../application/respository/BandeirasRepository";
import CanalVendaRepository from "../../application/respository/CanalVendaRepository";


export default class CsvEntityFactory {
    constructor(
        private readonly bandeirasRepository: BandeirasRepository,
        private readonly canalVendaRepository: CanalVendaRepository
    ) {}

    create(entityName: string): EntityFactory {
        if (entityName === "bandeiras") {
            
            return new BandeiraEntityFactory(this.bandeirasRepository);
        }

        if (entityName === "canalVenda") {
            return new CanalVendaEntityFactory(this.canalVendaRepository);
        }
    }
}