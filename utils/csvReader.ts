import fs from 'fs';
import path from 'path'
import { parse } from 'csv-parse/sync';

export function readCSV(filepath: string) {

    const fullpath = path.resolve(filepath)
    const fileContent = fs.readFileSync(fullpath)
    const records = parse(fileContent, {
        columns: true, skip_empty_lines: true
    });
    return records;
}