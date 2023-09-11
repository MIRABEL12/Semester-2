# Tugas Assignment02_Week6

***
## Nama : Andi Mira Detavia
## NIM : 10221023
***

1. What kind of situation whether we need to use for loops or while loop? Explain with a concrete example.

__Answer;__

Saat mempunyai jumlah iterasi yang pasti dan terbatas, maka lebih baik menggunakan for loop. Namun, jika tidak diketahui harus berapa kali iterasi yang diinginkan atau melakukan iterasi sampai kondisi tertentu tercapai, maka lebih baik menggunakan while loop.

Contoh; mencetak angka dari 1 hingga 10, maka menggunakan for loop:

for i in range(1, 11):
    print(i)
Namun, jika kita ingin meminta pengguna untuk memasukkan angka hingga mereka memasukkan angka yang lebih besar dari 10, maka kita perlu menggunakan while loop:

angka = 0
while angka <= 10:
    angka = int(input("Masukkan sebuah angka: "))

Contoh tersebut, program bisa terus meminta pengguna untuk memasukkan angka sampai mereka memasukkan angka yang lebih besar dari 10. Ini tidak bisa dilakukan dengan for loop karena tidak diketahuinya berapa kali pengguna akan memasukkan angka sebelum memasukkan angka yang lebih besar dari 10.

2. Write a JavaScript program to create the following multiplication table with user input up to number 9:

    1 2 3 
   ------
1 | 1 2 3
2 | 2 4 6
3 | 3 6 9

Use prompt-sync to get user input, for loops, and put the correct space when the result of multiplication is two digit numbers.

__Answer;__

Program nya;
const prompt = require('prompt-sync')();

// Get user input
const num = parseInt(prompt("Masukkan angka (maksimum 9): "));

// Create table header
let header = "  ";
for (let i = 1; i <= num; i++) {
  header += i + " ";
}
console.log(header);

// Create table border
let border = "--";
for (let i = 1; i <= num; i++) {
  border += "--";
}
console.log(border);

// Create table body
for (let i = 1; i <= num; i++) {
  let row = i + " |";
  for (let j = 1; j <= num; j++) {
    let result = i * j;
    if (result < 10) {
      row += " " + result + " ";
    } else {
      row += result + " ";
    }
  }
  console.log(row);
}

Screenshot;
<img src="./C:\Users\HP\OneDrive\Dokumen\si\week6\Screenshot (35).png">

Outputnya;
<img src="./C:\Users\HP\OneDrive\Dokumen\si\week6\Screenshot (34).png">

3. To emulate the age restriction of an webpage in a website (figure on the right side), make a simpler one that can ask the user to input their age or cancel to enter the page. The program should stop asking the user input until the user type “cancel” in the program.

__Answer;__

Jadi program ini akan meminta pengguna untuk memasukkan usia mereka, dan masuk ke dalam sebuah loop while yang terus meminta memasukan usia sampai pengguna mengetikkan "cancel" atau memasukkan usia yang valid. Jika pengguna memasukkan usia yang tidak valid (negatif atau bukan angka), maka program akan memberikan peringatan dan meminta pengguna untuk memasukkan usia lagi. Jika pengguna memasukkan usia kurang dari 18 tahun, program akan memberikan peringatan bahwa pengguna harus berusia minimal 18 tahun untuk masuk ke situs web ini. Jika pengguna memasukkan usia yang lebih besar dari atau sama dengan 18 tahun, program menyambut pengguna ke dalam situs web dan keluar dari loop while. Dan terakhir, program juga memberikan peringatan bahwa pengguna telah keluar dari situs web itu.

Programnya;

const prompt = require('prompt-sync')();

let age = prompt("Silahkan masukkan usia Anda untuk masuk ke situs web (atau ketik 'cancel' untuk keluar):");

while (age !== "cancel") {
  if (isNaN(age) || age < 0) {
    alert("Usia yang dimasukkan tidak valid, silahkan coba lagi!");
    age = prompt("Silahkan masukkan usia Anda untuk masuk ke situs web (atau ketik 'cancel' untuk keluar):");
  } else if (age >= 18) {
    alert("Selamat datang di situs web kami!");
    break;
  } else {
    alert("Maaf, Anda harus berusia minimal 18 tahun untuk masuk ke situs web ini.");
    age = prompt("Silahkan masukkan usia Anda untuk masuk ke situs web (atau ketik 'cancel' untuk keluar):");
  }
}
alert("Anda keluar dari situs web...");

Screenshot;
<img src="./C:\Users\HP\OneDrive\Dokumen\si\week6\Screenshot (1).png">

Outputnya;
<img src="./C:\Users\HP\OneDrive\Dokumen\si\week6\Screenshot (2).png">

<img src="./C:\Users\HP\OneDrive\Dokumen\si\week6\Screenshot (3).png">

<img src="./C:\Users\HP\OneDrive\Dokumen\si\week6\Screenshot (4).png">



