import CanalVenda from "./CanalVenda";

export default interface CanalVendaRepository {
    save (canalVenda: CanalVenda): Promise<void>;
    getAll (): Promise<CanalVenda[]>;
}