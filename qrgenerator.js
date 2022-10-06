const QR = require('qrcode')
const XLSX = require('xlsx')

const ws = XLSX.readFile('tickets.xlsx').Sheets['Sheet1']
const data = XLSX.utils.sheet_to_json(ws)

const generateQR = async (filename, data, options = {}) => {
  try {
    await QR.toFile(`exported_qr_codes/${filename}.png`, data.toString(), options)
  } catch (error) {
    console.error(error)
  }
}

data.forEach(row => {
  generateQR(row.TICKETS, row.TICKETS, { width: 250 })
})
