/*
 * JS Logger
 * Lightweight JavaScript Logger for the browser and node.
 * It is a perfect logger that supports all browsers.
 * It allows to print color logs with pre-defined 5 levels of logging
 * It has a debug mode in which you can print logs during dev and then set it to false to avoid printing confidential logs during production
 * Website: https://github.com/suhaibjanjua/js-logger
 * Copyright: (c) 2019 Suhaib Janjua
 * License: MIT
 */
try {

    var utc = function utc(now) {
        const datestring = now.toDateString() + " " + ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2);
        return datestring;
    };

    var exportFromMatTable = function exportFromMatTable(matTableSelector, filename) {

        const table = document.querySelector(matTableSelector);
        if (!table) {
            console.error(`Table element "${matTableSelector}" not found.`);
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

        // Create a row for the filename
        const filenameRow = Array(headers.length).fill('');
        const filenameRowIndex = Math.floor(filenameRow.length / 2); // Center column index
        filenameRow[filenameRowIndex] = filename;

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
        downloadLink.download = `${filename + "-" + utc(new Date())}.csv`;
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }


} catch (err) {
    console.log("Please ignore it...", err);
}