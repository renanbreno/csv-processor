import readLine from 'readline';
import fs from 'fs';
import CsvEntityFactory from '../factory/CsvEntityFactory';
import EntityFactory from '../factory/EntityFactory';
import BandeirasRepository from '../respository/BandeirasRepository';
import CanalVendaRepository from '../respository/CanalVendaRepository';

export default class ProcessarCsvs {
    constructor(
        private readonly bandeirasRepository: BandeirasRepository,
        private readonly canalVendaRepository: CanalVendaRepository
    ) {}

      async execute(csvs: string[]): Promise<number> {
        if (csvs.length === 0) throw new Error("Invalid array");

        const start = Date.now();
        for (const csv of csvs) {
            const csvName = csv.replace(/[0-9]/g, '').split('.')[0];

            const factory = new CsvEntityFactory(this.bandeirasRepository, this.canalVendaRepository);
            const entity: EntityFactory = factory.create(csvName);

            const readedLine = readLine.createInterface({
                input: fs.createReadStream(`./csv/${csv}`)
            })

            for await (const line of readedLine) {
                const lineSplitted = line.replaceAll("\"", "").split(";");
                await entity.processCsv(lineSplitted);
            }
        }
        const end = Date.now();
        const ellapsedTime = end - start;

        return ellapsedTime;
    }
}