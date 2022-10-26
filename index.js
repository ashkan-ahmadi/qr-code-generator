const QR = require('qrcode')
const XLSX = require('xlsx')

const ws = XLSX.readFile('tickets.xlsx').Sheets['Sheet1']
const data = XLSX.utils.sheet_to_json(ws)

const generateQR = (filename, data, options = {}) => {
  const defaultOptions = {
    // see complete list with defaults: https://github.com/soldair/node-qrcode#qr-code-options
    width: 250, // px
    margin: 2, // default: 4
    type: 'png', // string png|svg|utf8, default: png
  }

  const settings = { ...defaultOptions, ...options }

  try {
    QR.toFile(`exported_qr_codes/${filename}.png`, data.toString(), settings)
  } catch (error) {
    console.error(error)
  }
}

data.forEach(row => {
  generateQR(row.TICKETS, row.TICKETS)
})
