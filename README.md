# Node.js QR Code Generator

## Requirements

- Microsoft Excel (or any application that can read and write .xlsx file like Google Sheets or OpenOffice)

## How to use

1. Clone this repo
1. Open terminal and run `npm install` to install the 2 dependencies
1. Open the Book1.xlsx file and enter all your ticket numbers (or any other value) under Ticket_Number
1. Save the Excel file
1. Open terminal and run `node qrgenerator` to generate all the QR codes

## Customization

By default, the QR images will be 250 by 250 pixels. If you want to create smaller or bigger file dimensions, change `width` on line 16.

## Credit

This project is based on [this video](https://www.youtube.com/watch?v=UjJSJAMcD44).
