const prompt = require('prompt-sync')();

let ukuran = parseInt(prompt('Masukkan ukuran kartu (1-6): '));
if (isNaN(ukuran) || ukuran < 1 || ukuran > 6) {
    console.log('Ukuran kartu wajik salah, masukkan ukuran antara 1 sampai 6!');
}
else {

const border= `#${'-'.repeat(ukuran * 2 - 1 + 2)}#`;
console.log( border);

for (let a = 1; a <= ukuran; a++) {
    let row = '| ';
    for (let b = 1; b <= ukuran - a; b++) {
      row += ' ';
    }
    for (let c = 1; c <= a * 2 - 1; c++) {
      row += '*';
    }
    for (let l = 1; l <= ukuran - a; l++) {
      row += ' ';
    }
    row += ' |';
    console.log(row);
  }

  // Membuat setengah bawah wajik
  for (let a = ukuran - 1; a >= 1; a--) {
    let row = '| ';
    for (let b = 1; b <= ukuran - a; b++) {
      row += ' ';
    }
    for (let c = 1; c <= a * 2 - 1; c++) {
      row += '*';
    }
    for (let l = 1; l <= ukuran - a; l++) {
      row += ' ';
    }
    row += ' |';
    console.log(row);
}

console.log(border);
}

 