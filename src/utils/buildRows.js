/**
 * Return rows.
 * @param {array.<{key, values}>} data List with the data.
 * @param {array.<{key, label}>} columns List of columns.
 * @return {array} A list of object with key of the column.
 */
const buildRows = (data, columns) => Array.isArray(data) && data.map(datum => {
    const row = {key: datum.key, style: datum.style};
    datum.values?.forEach((value, index) => {
        const {key: columnKey} = columns[index] || {key: undefined};
        row[columnKey] = value;
    });
    return row;
});

export default buildRows;
