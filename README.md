# export-from-mattable

The ExportFromMatTable is a utility function that enables exporting data from a Material Angular table (`<mat-table>`) into a Comma-Separated Values (CSV) format. It retrieves the table headers and rows, converts the data into CSV format, and initiates the file download for the user.

Parameters:

matTableSelector (string): The id of the desired angular material table from the html you want to export.
filename (string): The desired filename for the exported CSV file.

Usage:

Pass the filename parameter to the ExportFromMatTable function to specify the filename for the exported file. The function will retrieve the data from the `<mat-table>` structure, including the headers and rows. The data will be converted into CSV format, with values separated by commas and rows separated by new lines. The CSV file will be created, and the user will be prompted to download it with the specified filename.

Note:

This function assumes the presence of a `<mat-table>` structure in the DOM, with the appropriate structure of `<mat-header-row>`, `<mat-header-cell>`, `<mat-row>`, and `<mat-cell>` elements.Ensure that the necessary dependencies, such as Blob creation and file downloading, are handled in the environment where this function is used (e.g., browser or Node.js).
The function is designed to work in a browser environment with access to the Document Object Model (DOM) APIs.

Example Usage:

You can call the ExportFromMatTable function like this:
```
const matTableSelector = '#myMatTable';
const filename = 'Export HTML Data';
exportMatTableToCSV(matTableSelector, filename);
```

In this example, the ExportFromMatTable function is called with the filename parameter set to 'Export HTML Data', resulting in the export of the Mat table data into a CSV file named `Export HTML Data - Thu Jul 13 2023 15_42_45.csv`.
