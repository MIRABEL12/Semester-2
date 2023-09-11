// membuat array 2D untuk menampung data investasi
const investasi = [
    ['BBCA', 18500, 22200],
    ['UNVR', 25200, 29500],
    ['TLKM', 10000, 11800],
    ['PGAS', 5500, 7400],
    ['ASII', 28000, 32900],
    ['WSKT', 16700, 19300]
  ];
  
  // membuat array untuk menampung ROI masing-masing saham
  let roi = [];
  
  // melakukan perulangan untuk menghitung ROI masing-masing saham
  for (let i = 0; i < investasi.length; i++) {
    let hasilInvestasi = investasi[i][2];
    let besarInvestasi = investasi[i][1];
    let roiSaham = (hasilInvestasi - besarInvestasi) / besarInvestasi;
    roi.push(roiSaham);
  }
  
  // membuat array 2D untuk menampung data ROI masing-masing saham
  let dataROI = [];
  
  for (let i = 0; i < investasi.length; i++) {
    let namaSaham = investasi[i][0];
    let roiSaham = roi[i];
    dataROI.push([namaSaham, roiSaham]);
  }
  
  // melakukan sorting untuk menentukan saham dengan ROI tertinggi
  dataROI.sort(function(a, b) {
    return b[1] - a[1];
  });
  
  // menampilkan hasil saham dengan ROI tertinggi
  console.log("Saham dengan ROI tertinggi adalah " + dataROI[0][0] + " dengan ROI sebesar " + dataROI[0][1]);