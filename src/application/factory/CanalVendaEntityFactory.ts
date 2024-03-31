import CanalVendaModel from "../../domain/models/CanalVendaModel";
import CanalVendaMapper from "../mappers/CanalVendaMapper";
import CanalVendaRepository from "../respository/CanalVendaRepository";
import EntityFactory from "./EntityFactory";

export default class CanalVendaEntityFactory implements EntityFactory {
    constructor(private readonly canalVendaRepository: CanalVendaRepository) {}

    async processCsv(content: string[]): Promise<void> {
            const canalVendaMapper = new CanalVendaMapper(content);
            const canalVendaObj = canalVendaMapper.toObject();
            const canalVenda = new CanalVendaModel(canalVendaObj);
            await this.canalVendaRepository.save(canalVenda)
        }
    }