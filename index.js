"use strict";

const utc = (now) => {
    const datestring =
        now.toDateString() +
        " " +
        ("0" + now.getHours()).slice(-2) +
        ":" +
        ("0" + now.getMinutes()).slice(-2) +
        ":" +
        ("0" + now.getSeconds()).slice(-2);
    return datestring;
};


const exportDataToCSV = (filename, headers, data) => {
    try {

        // Create a row for the filename
        const filenameRow = Array(headers.length).fill('');
        // const filenameRowIndex = Math.floor(filenameRow.length / 2); // Center column index
        filenameRow[0] = filename;

        // Convert to CSV format
        let csv = '';
        csv += filenameRow.join(',') + '\n';
        csv += headers.join(',') + '\n';
        csv += data.map(row => row.join(',')).join('\n');

        // Create a CSV file
        const csvBlob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const csvURL = URL.createObjectURL(csvBlob);

        // Trigger file download
        const downloadLink = document.createElement('a');
        downloadLink.href = csvURL;
        downloadLink.download = `${filename + " - " + utc(new Date())}.csv`;
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

    } catch (error) {
        console.error('Unable to export data to CSV - ', error);
        return;
    }
};

export const ExportFromMatTable = (tableId, filename) => {
    const table = document.querySelector(tableId);
    if (!table) {
        console.error(`Table element "${tableId}" not found.`);
        return;
    }

    if (!filename) { filename = "Export-From-MatTable"; }

    const rows = Array.from(table.querySelectorAll('mat-row'));

    // Extract table headers and remove commas
    const headers = Array.from(table.querySelectorAll('mat-header-row mat-header-cell')).map(cell => cell.innerText.replace(/,/g, '').trim());

    // Extract table data and remove commas from cell values
    const data = rows.map(row => {
        return Array.from(row.querySelectorAll('mat-cell')).map(cell => cell.innerText.replace(/,/g, '').trim());
    });

    // Preparing data to export it as CSV
    exportDataToCSV(filename, headers, data);

};

export const ExportFromTable = (tableId, filename) => {

    const table = document.querySelector(tableId);
    if (!table) {
        console.error(`Table element "${tableId}" not found.`);
        return;
    }

    if (!filename) { filename = "Export-From-Table"; }

    const rows = Array.from(table.querySelectorAll('tbody tr'));

    // Extract table headers and remove commas
    const headers = Array.from(table.querySelectorAll('thead th')).map(cell => cell.innerText.replace(/,/g, '').trim());

    // Extract table data and remove commas from cell values
    const data = rows.map(row => {
        return Array.from(row.querySelectorAll('td')).map(cell => cell.innerText.replace(/,/g, '').trim());
    });

    // Preparing data to export it as CSV
    exportDataToCSV(filename, headers, data);
};