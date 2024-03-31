import Bandeira from "../../domain/entity/Bandeira";

export default interface BandeirasRepository {
    save (bandeira: Bandeira): Promise<void>;
    getAll (): Promise<Bandeira[]>;
}