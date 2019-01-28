/* global Blob */
import Papa from 'papaparse';
import {saveAs} from 'file-saver';

export default class CsvService {
    static download(data, fileName, delimiter = ';') {
        const csv = Papa.unparse(data, {quotes: true, delimiter});
        saveAs(
            new Blob(
                [csv], {type: 'text/csv;charset=utf-8'}
            ), `${fileName}.csv`
        );
    }
}
