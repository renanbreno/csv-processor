import fs from 'fs';
import path from 'path';

export default class GetCsvs {
    constructor() {}

    execute(input: string): string[] {
        return fs.readdirSync(path.resolve(input)).filter((file: string) => file.endsWith('.csv'));
    }
}