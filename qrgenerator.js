const QR = require('qrcode')
const XLSX = require('xlsx')

const ws = XLSX.readFile('tickets.xlsx').Sheets['Sheet1']
const data = XLSX.utils.sheet_to_json(ws)

const generateQR = (filename, data, options = {}) => {
  try {
    QR.toFile(`exported_qr_codes/${filename}.png`, data, options)
  } catch (error) {
    console.error(error)
  }
}

data.forEach(row => {
  generateQR(row.TICKETS, row.TICKETS + '', { width: 250 }) // the + '' part converts numbers to strings. otherwise, it wont work. the value MUST BE STRING
})
