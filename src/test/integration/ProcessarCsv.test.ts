import GetCsvs from "../../application/usecase/GetCsvs";
import ProcessarCsvs from "../../application/usecase/ProcessarCsvs"
import prisma from "../../infra/database/PrismaClient";
import BandeirasRepositoryDatabase from "../../infra/repository/BandeiraRepositoryDatabase";
import CanalVendaRepositoryDatabase from "../../infra/repository/CanalVendaRepositoryDatabase";
import InMemoryBandeirasRepository from "../../infra/repository/in-memory/InMemoryBandeirasRepository";
import InMemoryCanalVendaRepository from "../../infra/repository/in-memory/InMemoryCanalVendaRepository";

test("Não deve processar uma lista vazia de csvs", async () => {
    const bandeirasRepository = new BandeirasRepositoryDatabase(prisma);
    const canalVendaRepository = new CanalVendaRepositoryDatabase(prisma);

    const processarCsvs = new ProcessarCsvs(bandeirasRepository, canalVendaRepository);

    await expect(() => processarCsvs.execute([])).rejects.toThrow(new Error("Invalid array"));
})

test("Deve processar dois csvs", async () => {
    const bandeirasRepository = new InMemoryBandeirasRepository();
    const canalVendaRepository = new InMemoryCanalVendaRepository();

    const getCsvs = new GetCsvs();
    const csvs = getCsvs.execute("./csv/");

    const processarCsvs = new ProcessarCsvs(bandeirasRepository, canalVendaRepository);
    const ellapsedTime = await processarCsvs.execute(csvs);
    const bandeiras = await bandeirasRepository.getAll();
    expect(bandeiras.length).toBeGreaterThan(0);

    const canalVenda = await canalVendaRepository.getAll();
    expect(canalVenda.length).toBeGreaterThan(0);
    expect(ellapsedTime).toBeTruthy();
})