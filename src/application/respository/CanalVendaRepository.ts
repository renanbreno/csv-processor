import CanalVenda from "../../domain/models/CanalVendaModel";

export default interface CanalVendaRepository {
    save (canalVenda: CanalVenda): Promise<void>;
    getAll (): Promise<CanalVenda[]>;
}