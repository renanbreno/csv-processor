import CanalVenda from "../../domain/entity/CanalVenda";
import CanalVendaRepository from "../../application/respository/CanalVendaRepository";
import {PrismaClient } from '@prisma/client'

export default class CanalVendaRepositoryDatabase implements CanalVendaRepository {
    constructor(private readonly prisma: PrismaClient) {}
    async save(canalVenda: CanalVenda): Promise<void> {
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
    }

}