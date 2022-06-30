const QR = require('qrcode')
const XLSX = require('xlsx')

const ws = XLSX.readFile('Book1.xlsx').Sheets['Sheet1']
const data = XLSX.utils.sheet_to_json(ws)

const generateQR = (filename, data, options = {}) => {
  try {
    QR.toFile(`exported_qr_codes/${filename}.png`, data, options)
  } catch (error) {
    console.error(error)
  }
}

data.forEach(row => {
  generateQR(row.Ticket_Number, row.Ticket_Number, { width: 250 })
})
