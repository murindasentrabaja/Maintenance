function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('Maintenance Report Dashboard - PT Murinda Sentra Baja');
}

// Fungsi ini akan dipanggil oleh HTML untuk mengambil data real-time
function getSpreadsheetData() {
  const ssId = '1YHEQnr-rOE9az3Fj3g1UL01YW7G3rGIPkP1nl9KE_ng';
  const ss = SpreadsheetApp.openById(ssId);
  const sheets = ss.getSheets();
  let result = {};
  
  // Looping untuk mengambil seluruh data dari setiap sheet
  sheets.forEach(sheet => {
    const sheetName = sheet.getName();
    // Menggunakan getDisplayValues agar teks/angka yang dirender sama persis visualnya dengan di Sheet
    const data = sheet.getDataRange().getDisplayValues(); 
    result[sheetName] = data;
  });
  
  return result;
}