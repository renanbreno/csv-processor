import Bandeira from "../../domain/models/BandeiraModel";

export default interface BandeirasRepository {
    save (bandeira: Bandeira): Promise<void>;
    getAll (): Promise<Bandeira[]>;
}