import CanalVendaRepository from "../../../application/respository/CanalVendaRepository";
import CanalVendaModel from "../../../domain/models/CanalVendaModel";

export default class InMemoryCanalVendaRepository implements CanalVendaRepository {
    data = [];

    constructor() {}
    async save(canalVenda: CanalVendaModel): Promise<void> {
        this.data.push({
            id: canalVenda.id,
            codigo_loja: canalVenda.enterpriseCode,
            descricao: canalVenda.description,
            apelido: canalVenda.nickName,
            observacao: canalVenda.observation,
            maestro_id: canalVenda.maestroId
        })
    }

    async getAll(): Promise<CanalVendaModel[]> {
        const canalVenda = [];
        for (const canalVendaData of this.data) {
            canalVenda.push(new CanalVendaModel({
                id: canalVendaData.id,
                description: canalVendaData.descricao
            }))
        }

        return canalVenda;
    }

}