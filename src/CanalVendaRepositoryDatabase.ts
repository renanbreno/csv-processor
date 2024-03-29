import CanalVenda from "./CanalVenda";
import CanalVendaRepository from "./CanalVendaRepository";
import {PrismaClient } from '@prisma/client'
import CanalVendaMapper from "./mappers/CanalVendaMapper";

export default class CanalVendaRepositoryDatabase implements CanalVendaRepository {
    prisma: PrismaClient = new PrismaClient()

    constructor() {}
    async save(canalVenda: CanalVenda): Promise<void> {
        console.log(canalVenda, "aaaa")
        await this.prisma.canalVenda.create({
            data: {
                id: canalVenda.id,
                codigo_loja: canalVenda.enterpriseCode,
                descricao: canalVenda.description,
                apelido: canalVenda.nickName,
                observacao: canalVenda.observation,
                maestro_id: canalVenda.maestroId
            }
        })
    }

    async getAll(): Promise<CanalVenda[]> {
        const canaisVendaData = await this.prisma.canalVenda.findMany();
        const canalVenda = [];

        for (const canalVendaData of canaisVendaData) {
            canalVenda.push(new CanalVenda({
                id: canalVendaData.id,
                enterpriseCode: canalVendaData.codigo_loja,
                description: canalVendaData.descricao,
                nickName: canalVendaData.apelido,
                observation: canalVendaData.observacao,
                maestroId: canalVendaData.maestro_id
            }))
        }
    
        return canalVenda;
        // const canalVendaMapper = new CanalVendaMapper(canalVenda);
        // return new CanalVenda(canalVendaMapper)

    }

}