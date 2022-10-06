# Node.js QR Code Generator

## Requirements

- Microsoft Excel (or any application that can read and write .xlsx file like Google Sheets or OpenOffice)

## How to use

1. Clone this repo
1. Open terminal and run `npm install` to install the 2 dependencies
1. Open the tickets.xlsx file and enter all your ticket numbers (or any other value) under TICKETS
1. Save the Excel file
1. Open terminal and run `node qrgenerator` to generate all the QR codes

Keep in mind: all the values must be in the string/text format. To ensure there is no issue, all the values are converted to string in the `generateQR` function.

## Customization

By default, the QR images will be 250 by 250 pixels. If you want to create smaller or bigger file dimensions, change `width`.

## Credit

This project is based on [this video](https://www.youtube.com/watch?v=UjJSJAMcD44).
