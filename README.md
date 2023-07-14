# export-from-mattable

The `ExportFromMatTable` and `ExportFromTable` are utility functions that enables exporting data from an Angular Material table (`<mat-table>`) or a standard table (`<table>`) into a Comma-Separated Values (CSV) format. It retrieves the table headers and rows, converts the data into CSV format, and initiates the file download for the user.

Parameters:

tableId (string): The id of the desired angular material table or a standard table from the html you want to export.
filename (string): The desired filename for the exported CSV file.

Usage:

Pass the tableId and filename parameters to the `ExportFromMatTable` function to specify the filename for the exported file. The function will retrieve the data from the `<mat-table>` structure, including the headers and rows. The data will be converted into CSV format, with values separated by commas and rows separated by new lines. The CSV file will be created, and the user will be prompted to download it with the specified filename.

Pass the tableId and filename parameters to the `ExportFromTable` function to specify the filename for the exported file. The function will retrieve the data from the standard `<table>` structure, including the headers and rows. The data will be converted into CSV format, with values separated by commas and rows separated by new lines. The CSV file will be created, and the user will be prompted to download it with the specified filename.

Note:

The `ExportFromMatTable` function assumes the presence of a `<mat-table>` structure in the DOM, with the appropriate structure of `<mat-header-row>`, `<mat-header-cell>`, `<mat-row>`, and `<mat-cell>` elements. 

While `ExportFromTable` function assumes the presence of a standard `<table>` structure in the DOM, with the appropriate structure of `<thead>`, `<tbody>`, `<th>`, `<tr>`, and `<td>` elements. `<tfoot>` is not a part of the exported file.

These functions are designed to work in a browser environment with access to the Document Object Model (DOM) APIs (e.g., browser or Node.js).

Example Usage:

You can call the `ExportFromMatTable` function like this:
```
const tableId = '#tableId';
const filename = 'Export HTML Data';
ExportFromMatTable(tableId, filename);
```

and

You can call the `ExportFromTable` function like this:
```
const tableId = '#tableId';
const filename = 'Export HTML Data';
ExportFromTable(tableId, filename);
```

In the above examples, the `ExportFromMatTable` and `ExportFromTable` functions are called with the filename parameter set to `Export HTML Data`, which exports a CSV file named as  
`Export HTML Data - Thu Jan 13 2023 15_42_45.csv`
