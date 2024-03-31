import fs from 'fs';
import path from 'path';

export default class GetCsvs {
    constructor(private readonly csvsPath: string) {}

    execute(): string[] {
        return fs.readdirSync(path.resolve(this.csvsPath)).filter((file: string) => file.endsWith('.csv'));
    }
}