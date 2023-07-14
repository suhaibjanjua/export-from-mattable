# export-from-mattable

[![npm version](https://badge.fury.io/js/export-from-mattable.svg)](https://www.npmjs.com/package/export-from-mattable)
[![license](https://img.shields.io/npm/l/export-from-mattable)](https://github.com/suhaibjanjua/export-from-mattable/blob/main/LICENSE.md)

Fast and lightweight html TABLE to CSV converter. This package includes two modules:

  * **[ExportFromMatTable](#exportfrommattable):** A synchronous mat TABLE(`<mat-table>`) to CSV converter written in plain JavaScript. It's fast and simple to use.
  * **[ExportFromTable](#exportfromtable):** A synchronous html TABLE(`<table>`) to CSV converter written in plain js. Really fast and supports large datasets.


### Features

- Fast and lightweight
- Support for standard TABLE as well as MAT-TABLE
- Support for custom filename that also shows up in the top row


## Requirements

- None


## Installation

### **NPM**

You can install export-from-mattable as a dependency using NPM.

```bash
$ npm install export-from-mattable --save
```


### **Yarn**

You can install export-from-mattable as a dependency using Yarn.

```bash
$ yarn add export-from-mattable
```


## ExportFromMatTable

`ExportFromMatTable` can be used programmatically as a synchronous converter.

It retrieves the entire Angular Material Table with the tag (`<mat-table>`) that matches to the param `tableId` to load headers and rows to converts the data into the CSV format, and initiates the file download for the user.


### Usage

```js
import { ExportFromMatTable } from "export-from-mattable";

try {
  const tableId = '#tableId';
  const filename = 'Export HTML Data';
  ExportFromMatTable(tableId, filename);
  
  // Exported file name ==> Export HTML Data - Thu Jan 13 2023 15_42_45.csv
} catch (err) {
  console.error(err);
}
```


#### Parameters

* tableId (string): The id of the desired angular material table or a standard table from the html you want to export.
* filename (string): The desired filename for the exported CSV file.


##### Note

The `ExportFromMatTable` function assumes the presence of a `<mat-table>` structure in the DOM, with the appropriate structure of `<mat-header-row>`, `<mat-header-cell>`, `<mat-row>`, and `<mat-cell>` elements. 

This module is designed to work in a browser environment with access to the Document Object Model (DOM) APIs (e.g., browser or Node.js).


## ExportFromTable

`ExportFromTable` can be used programmatically as a synchronous converter.

It retrieves the html table (`<table>`) by matching the param `tableId` in the DOM, with the appropriate structure of `<thead>`, `<tbody>`, `<th>`, `<tr>`, and `<td>` elements. `<tfoot>` is not considered while exporting the table to a CSV format.

### Usage

```js
import { ExportFromTable } from "export-from-mattable";

try {
  const tableId = '#tableId';
  const filename = 'Export HTML Data';
  ExportFromTable(tableId, filename);

  // Exported file name ==> Export HTML Data - Thu Jan 13 2023 15_42_45.csv
} catch (err) {
  console.error(err);
}
```


#### Parameters

* tableId (string): The id of the desired angular material table or a standard table from the html you want to export.
* filename (string): The desired filename for the exported CSV file.


##### Note

While `ExportFromTable` function assumes the presence of a standard `<table>` structure in the DOM, with the appropriate structure of `<thead>`, `<tbody>`, `<th>`, `<tr>`, and `<td>` elements. `<tfoot>` is not a part of the exported file.

This module is designed to work in a browser environment with access to the Document Object Model (DOM) APIs (e.g., browser or Node.js).


## License

See [LICENSE.md](https://github.com/suhaibjanjua/export-from-mattable/blob/main/LICENSE.md).
