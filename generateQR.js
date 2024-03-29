import fs from 'fs'
import QR from 'qrcode'
import XLSX from 'xlsx'

export const generateQR = (destinationFolderName, filename, data, options = {}) => {
  const defaultOptions = {
    // see complete list with defaults: https://github.com/soldair/node-qrcode#qr-code-options
    width: 250, // image size in px
    margin: 2, // default: 4 (smaller number = less white padding around the QR)
    type: 'png', // string png|svg|utf8, default: png
  }

  // merge passed options with default options
  const settings = { ...defaultOptions, ...options }

  try {
    // create folder if it doesn't exist
    if (!fs.existsSync(destinationFolderName)) {
      fs.mkdirSync(destinationFolderName)
      console.log(`Created directory: ${destinationFolderName}`)
    }

    // data has to be in string format, otherwise, it throws an error
    QR.toFile(`${destinationFolderName}/${filename}.png`, data.toString(), settings)
  } catch (error) {
    console.error(error)
  }
}

export const getExcelData = (excelFileName, worksheetName) => {
  // read the worksheet of the Excel file
  const ws = XLSX.readFile(excelFileName).Sheets[worksheetName]

  // convert data to JSON
  const data = XLSX.utils.sheet_to_json(ws)

  return data
}
