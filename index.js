function exportFromMatTable(filename) {
    const rows = Array.from(document.querySelectorAll('mat-table mat-row'));

    // Extract table headers and remove commas
    const headers = Array.from(document.querySelectorAll('mat-table mat-header-row mat-header-cell')).map(cell => cell.innerText.replace(/,/g, '').trim());

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
    downloadLink.download = `${filename}.csv`;
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}


module.exports = exportFromMatTable;