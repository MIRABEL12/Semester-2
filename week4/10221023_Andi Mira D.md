# Laporan Tugas_week4

## Nama : Andi Mira Detavia
## NIM : 10221023
***
### 1. Choose four string methods and give some examples how to use them.

### Answer :
- toUpperCase() ; Mengubah String ke Huruf Besar, dengan mengembalikan string yang dikonversi ke huruf besar.

**Contoh;**

const str = 'reza';

console.log(str.toUpperCase()); // REZA

- toLowerCase() : Mengubah String ke Huruf Kecil, dengan mengembalikan string yang dikonversi ke huruf kecil.

 **Contoh;**

const str = 'Reza';

console.log(str.toLowerCase()); // reza

- trim() ; Menghapus Spasi di Awal dan di Akhir String, dengan menghapus spasi (white space) di awal dan akhir string termasuk spasi, tab, dan sebagainya, serta karakter terminator baris seperti CR dan LF.

**Sintaks;**

trim();

**Nilai Kembalian;**

Mengembalikan string sesuai sumber tanpa spasi di awal dan akhir.

**Contoh;**

const str = '     reza      ';

console.log(str.trim()); // "reza"

- substring() : mengambil Bagian String.
Mirip seperti slice(), substring() mengambil bagian dari string sesuai dengan indeks awal dan akhir yang ditentukan.

Karakter di indeks awal ikut diambil, sedangkan karakter di indeks akhir tidak diambil.

**Sintaks;**

substring(indeksAwal, indeksAkhir);

**Parameter;**

*indeksAwal: indeks dari karakter pertama yang ingin diambil.*

*indeksAkhir (opsional): indeks karakter akhir yang ingin dikecualikan dari string yang dikembalikan.*

**Nilai Kembalian;**

Mengembalikan string yang berisi bagian tertentu dari string sumber.

**Contoh;**

const str = 'saya sedang belajar javascript';

console.log(str.substring(1, 3)); // ay

console.log(str.substring(5)); // sedang belajar javascrip
___
### 2. Explain the following code and what the results are

let a = 1, b = 2, c = 3; console.log(a, b, c);

[a, b, c] = [a, c, b]; console.log(a, b, c);

[a, b, c] = [c, b, a]; console.log(a, b, c);

[a, b, c] = [a, c, b]; console.log(a, b, c);

[a, b, c] = [c, b, a]; console.log(a, b, c);

[a, b, c] = [a, c, b]; console.log(a, b, c);

### Answer :

Kode di atas merupakan destructuring assignment di JavaScript, yang bisa saja untuk assignment nilai-nilai dari array atau objek ke beberapa variabel secara simultan.

- Baris 1 : mendeklarasikan dan menganalisi tiga variabel a, b, dan c dengan nilai 1, 2, dan 3 berturut-turut, lalu menampilkan nilainya ke konsol menggunakan console.log(a, b, c);.

- Baris 2 : menggunakan destructuring assignment pada array untuk menukar nilai antara b dan c, lalu memerintahkan lagi nilai-nilai tersebut ke a, b, dan c. Artinya a tetap bernilai 1, b menjadi 3, dan c menjadi 2. Kemudian nilai variabel tersebut diperbarui dan dicetak ke konsol menggunakan console.log(a, b, c);.

- Baris 3 : menggunakan destructuring assignment pada array untuk menukar nilai antara a dan c, artinya a  menjadi 2, b tetap 3, dan c menjadi 1. Lalu nilai variabel tersebut diperbarui dan dicetak ke konsol menggunakan console.log(a, b, c);.

- 3 baris selanjutnya mengulangi proses pertukaran nilai yang sama, pertama nilai b dan c, lalu nilai a dan c lagi, dan terakhir nilai b dan c sekali lagi. Nilai a, b, dan c kemudian dicetak ke konsol setelah setiap pertukaran.

**Bisa dilihat output yang keluar yaitu :**

1 2 3

1 3 2

2 3 1

2 1 3

3 1 2

3 2 1

**Noted :** nilai a, b, dan c menukar posisinya antara baris 2 dan 3, dan lalu kembali ke posisi awal antara baris 4 dan 5. Artinya bahwa hasil akhirnya sama dengan nilai awal, namun urutan variabel-variabel telah berubah.
___
### 3. Calculate the total annual income of Abdul from the following paragraph.

*“Abdul earns 2.800.000 rupiahs from salary per month, 5.300.000 rupiahs from freelance per month, and 20.300.000 rupiahs per year.”*

Hint: define it as a string text and extract the number by the string methods.

### Answer :

<img src="./C:\Users\HP\OneDrive\Dokumen\si\week4\Screenshot (27).png">

**Outputnya :** <img src="./C:\Users\HP\OneDrive\Dokumen\si\week4\Screenshot (28).png">

Kode tersebut, menggunakan metode string untuk mengekstrak angka dari setiap jenis pendapatan yang diberikan, yaitu gaji bulanan, freelance bulanan, dan pendapatan tahunan. Lalu selanjutnya dapat menghitung total pendapatan tahunan dengan menjumlahkan pendapatan gaji dan freelance per bulan, dikalikan dengan jumlah bulan dalam setahun, lalu ditambahkan dengan pendapatan tahunan. Akhirnya, mencetak hasilnya dalam format yang sesuai menggunakan metode toLocaleString() dengan parameter 'id-ID' agar format angka menjadi format Indonesia.