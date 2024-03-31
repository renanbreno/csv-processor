import CanalVenda from "../../domain/entity/CanalVenda";
import CanalVendaMapper from "../mappers/CanalVendaMapper";
import CanalVendaRepository from "../respository/CanalVendaRepository";
import EntityFactory from "./EntityFactory";

export default class CanalVendaEntityFactory implements EntityFactory {
    constructor(private readonly canalVendaRepository: CanalVendaRepository) {}

    async processCsv(content: string[]): Promise<void> {
            const canalVendaMapper = new CanalVendaMapper(content);
            const canalVendaObj = canalVendaMapper.toObject();
            const canalVenda = new CanalVenda(canalVendaObj);
            await this.canalVendaRepository.save(canalVenda)
        }
    }