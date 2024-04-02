import GetCsvs from "./application/usecase/GetCsvs";
import ProcessarCsvs from "./application/usecase/ProcessarCsvs";
import prisma from "./infra/database/PrismaClient";
import BandeirasRepositoryDatabase from "./infra/repository/BandeiraRepositoryDatabase";
import CanalVendaRepositoryDatabase from "./infra/repository/CanalVendaRepositoryDatabase";

function main() {
    const bandeiraRespository = new BandeirasRepositoryDatabase(prisma);
    const canalVendaRepository = new CanalVendaRepositoryDatabase(prisma);
    
    const getCsvs = new GetCsvs();
    const csvs = getCsvs.execute("./csv/");
    const processarCsvs = new ProcessarCsvs(bandeiraRespository, canalVendaRepository);
    processarCsvs.execute(csvs);
}

main();