import path from 'path';
import fs from 'fs';
import readLine from 'readline';

// expor o prisma através de uma interface
import { PrismaClient } from '@prisma/client'
import CanalVenda from './CanalVenda';
import Bandeiras from './Bandeiras';
import CanalVendaRepositoryDatabase from './CanalVendaRepositoryDatabase';
import CanalVendaMapper from './mappers/CanalVendaMapper';
const prisma = new PrismaClient()

function getCsvs() {
   const csvs: String[] = fs.readdirSync(path.resolve('./csv')).filter((file: string) => file.endsWith('.csv'));
   return csvs
}

const csvs = getCsvs();

for (const csv of csvs) {
    readCsv(csv)
}

function readCsv(csv: String) {
    const line = readLine.createInterface({
        input: fs.createReadStream(`./csv/${csv}`)
    })

    const csvName = csv.replace(/[0-9]/g, '').split('.')[0];

    line.on("line", async (data: string) => {
        const content = data.replaceAll("\"", "").split(";");
        insertOnDb(content, csvName)
    })
}

async function insertOnDb(content: string[], csvName: string) {
    // Implementar uma fábrica
    
    if (csvName === "canalVenda") {
        const canalVendaMapper = new CanalVendaMapper(content);
        const canalVendaObj = canalVendaMapper.toObject();
        const canalVenda = new CanalVenda(canalVendaObj);
        const canalVendaRepository = new CanalVendaRepositoryDatabase();
        //canalVendaRepository.save(canalVenda)
        canalVendaRepository.getAll();
       // canalVendaRepository.getAll();
    }

    if (csvName === "bandeiras") {
        return;
        const bandeiras = new Bandeiras(content);
        const bandeirasObj = bandeiras.toObject();
            await prisma.bandeiras.create({
            data: {
                id: bandeirasObj.id,
                descricao: bandeirasObj.description
            }
        })
    }
}