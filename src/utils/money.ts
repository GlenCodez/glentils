import { readFile } from 'fs/promises';
import path from 'path';
import { parse } from 'csv-parse/sync';

const AccountGet = async () => {
    const config = {
        baseDir: "data/input",
        fileName: "transactions.csv"
    };
    const {
        baseDir,
        fileName
    } = config;
    let data;
    const dataSource = path.join(baseDir,fileName)
    data = await readFile(dataSource)
    data = data.toString()
    const records = parse(data, {
        columns: true,
        skip_empty_lines: true
    })
    console.log(records);
}

AccountGet();