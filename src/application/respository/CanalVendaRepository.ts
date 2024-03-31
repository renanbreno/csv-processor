import CanalVenda from "../../domain/entity/CanalVenda";

export default interface CanalVendaRepository {
    save (canalVenda: CanalVenda): Promise<void>;
    getAll (): Promise<CanalVenda[]>;
}