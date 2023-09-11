# Tugas Assignment04_Week12

***
## Nama : Andi Mira Detavia
## NIM : 10221023
***

1. Jika ingin mengubah pola {8,} menjadi {8,16}, maka aturan validasi kata sandi akan mengharuskan kata sandi memiliki panjang minimal 8 karakter dan maksimal 16 karakter.

Contoh kata sandi yang valid untuk pola {8,16} adalah:

* "Passw0rd" 
* "Secr3tP@ssw0rd" 
* "strongPas5w0rd"
* "H3lloWorld123"
* "My$ecretP@ssword"

Contoh kata sandi yang tidak valid untuk pola {8,16} adalah:

* "abc123" (karakter kurang dari 8)
* "ThisIsAVeryLongPassword" (karakter lebih dari 16)
* "weakpass" (kurang dari 8 karakter)
* "verylongpassword1234567890" (lebih dari 16 karakter)
* "123456789" (hanya terdiri dari angka dan kurang dari 8 karakter)

2.  untuk menangkap kata yang ber rima berwarna biru di teks yang diberikan dan mengembalikan posisi indeksnya menggunakan JavaScript: 
```js
const text = `Driving in my car, I saw a little cat
Sitting in the street, just like that

I hit the brakes, and came to a stop
The cat looked up, and then did hop

It ran away, as quick as a flash
I couldn't help but feel abash

I love my car, it's shiny and red
But I'll slow down, and watch ahead

To make sure no cats, or anything in sight
Will cross my path, and give me a fright`;

const pattern = /\b(\w+),\n\w+ (\w+)\b/g;
const matches = [];
let match;

while ((match = pattern.exec(text)) !== null) {
  matches.push(match.index);
}

console.log(matches);

```

Code di atas adalah contoh kode JavaScript yang mencari pola kata dalam teks menggunakan ekspresi reguler (regular expression). Berikut adalah penjelasan langkah-demi-langkah dari kode tersebut:

1. Kode pertama mendefinisikan sebuah variabel text yang berisi teks yang ingin dicari pola kata di dalamnya. Teks     tersebut terdiri dari beberapa baris yang berisi cerita tentang melihat kucing di jalan.

2. Kode berikutnya mendefinisikan sebuah variabel pattern yang merupakan ekspresi reguler (regex). Ekspresi reguler ini digunakan untuk mencocokkan pola kata yang spesifik di dalam teks.

3. Ekspresi reguler yang digunakan adalah /\b(\w+),\n\w+ (\w+)\b/g. dimana  ekspresi reguler ini menjadi beberapa bagian:

* \b adalah pembatas kata yang menunjukkan batas awal atau akhir kata.
* (\w+) adalah pola yang mencocokkan satu atau lebih karakter kata. Dalam hal ini, pola ini mencocokkan kata pertama dalam setiap baris.
, mencocokkan tanda koma.
* \n mencocokkan karakter baris baru (new line).
* \w+ mencocokkan satu atau lebih karakter kata. Dalam hal ini, pola ini mencocokkan kata kedua dalam setiap baris.
* (\w+) adalah pola yang mencocokkan satu atau lebih karakter kata. Dalam hal ini, pola ini mencocokkan kata kedua dalam setiap baris.
* \b adalah pembatas kata yang menunjukkan batas awal atau akhir kata.
* g adalah bendera global yang menunjukkan bahwa pencarian harus dilakukan secara global di seluruh teks.
4. Kode selanjutnya membuat sebuah array kosong matches yang akan digunakan untuk menyimpan indeks dari pola kata yang cocok.

5. Kemudian, ada sebuah loop while yang akan berjalan selama terdapat kecocokan pola kata dalam teks. Loop ini menggunakan method exec() dari ekspresi reguler untuk mencari kecocokan berulang.

6. Setiap kali ada kecocokan, indeks dari kecocokan tersebut (match.index) akan ditambahkan ke dalam array matches menggunakan method push().

7. Setelah loop selesai, array matches akan berisi indeks-indeks di mana pola kata yang cocok ditemukan dalam teks.

8. Terakhir, hasil pencarian pola kata yang cocok akan dicetak ke konsol menggunakan console.log(matches).

Dalam kode ini, ekspresi reguler mencocokkan pola kata di mana kata pertama diikuti oleh tanda koma, karakter baris baru, dan kata kedua. Hasilnya, kode ini akan mencetak indeks-indeks di mana pola kata tersebut ditemukan dalam teks.