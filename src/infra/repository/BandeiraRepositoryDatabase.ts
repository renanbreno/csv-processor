import {PrismaClient } from '@prisma/client'
import Bandeira from "../../domain/entity/Bandeira";
import BandeirasRepository from "../../application/respository/BandeirasRepository";

export default class BandeirasRepositoryDatabase implements BandeirasRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async save(bandeira: Bandeira): Promise<void> {
        await this.prisma.bandeiras.create({ 
            data: {
                id: bandeira.id,
                descricao: bandeira.description,
            }
        })    
    }

    async getAll(): Promise<Bandeira[]> {
        const bandeirasData = await this.prisma.bandeiras.findMany();
        const bandeiras = [];
        
        for (const bandeiraData of bandeirasData) {
            bandeiras.push(new Bandeira({
                id: bandeiraData.id,
                description: bandeiraData.descricao
            }))
        }

        return bandeiras;
    }

}