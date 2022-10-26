import { getExcelData, generateQR } from './generateQR.js'

const data = getExcelData('tickets.xlsx', 'Sheet1')

data.forEach(row => {
  // arguments: output folder name, file name, data to render, options
  generateQR('exported_qr_codes', row.TICKETS, row.TICKETS, {})
})
