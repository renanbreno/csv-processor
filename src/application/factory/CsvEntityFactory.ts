import BandeiraEntityFactory from "./BandeiraEntityFactory";
import CanalVendaEntityFactory from "./CanalVendaEntityFactory";
import EntityFactory from "./EntityFactory";
import BandeirasRepository from "../respository/BandeirasRepository";
import CanalVendaRepository from "../respository/CanalVendaRepository";

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