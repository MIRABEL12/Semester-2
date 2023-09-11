# Laporan Tugas_Week12

***
## Nama : Andi Mira Detavia
## NIM : 10221023
***

1. ASynchronicity mirip dengan kerja sama kelompok gagak dalam membangun sarang. Gagak-gagak tersebut dapat bekerja secara bersamaan dalam tugas-tugas yang berbeda, sehingga sarang dapat dibangun dengan cepat dan efisien tanpa menunggu satu sama lain. Pemrograman asinkron juga memungkinkan program untuk menjalankan beberapa tugas secara bersamaan tanpa harus menunggu satu tugas selesai sebelum memulai yang lain.

 Callback dalam pemrograman asinkron mirip dengan gagak yang saling berkomunikasi untuk mengoordinasikan tindakan mereka. Ketika satu gagak selesai mengumpulkan ranting, ia memberi sinyal kepada gagak lain untuk mulai merajut bersama. Begitu juga, ketika tugas asinkron selesai, fungsi callback memberi sinyal kepada program untuk memulai tugas berikutnya. Seperti alat dan perpustakaan yang digunakan oleh gagak dalam membangun perangkat komputasi mereka, pemrograman asinkron juga menggunakan alat-alat yang membantu membuat proses pemrograman lebih efisien dan efektif.

 2.  
 hal-hal yang saya pahami tentang penggunaan Web API fetch adalah sebagai berikut:

* Fetch API digunakan untuk mengambil data dari sumber eksternal seperti REST API, mengambil data dari suatu server menggunakan protokol HTTP. dan mengembalikan promise yang berisi data dalam format Response.
* Fetch API dapat digunakan untuk mengambil data dalam berbagai format, seperti JSON, XML, dan text.
* Fetch API menggunakan HTTP request methods seperti GET, POST, PUT, DELETE, dan sebagainya untuk mengambil data dari sumber eksternal.
* Fetch API juga memiliki opsi konfigurasi seperti headers, body, mode, cache, dan lain-lain untuk mengatur permintaan HTTP.
* Fetch API dapat digunakan dengan async/await atau dengan menggunakan method chaining untuk menangani data yang diambil dan memanipulasinya.
* Response dari Fetch API memiliki method seperti json(), text(), dan blob() yang dapat digunakan untuk mengambil data dari body Response dan mengubahnya menjadi format yang dibutuhkan.
* Untuk menggunakan Fetch API, kita memanggil fungsi fetch() dan melewatkan URL yang ingin diambil datanya sebagai argumen.
* Setelah data diambil, kita menggunakan fungsi .then() untuk menangani respons yang diterima.
* dapat menggunakan fungsi .catch() untuk menangani kesalahan jika terjadi kesalahan saat mengambil data.

Hal yang masih perlu dipelajari:

* Cara menggunakan opsi konfigurasi seperti method, headers, body, dan mode pada fungsi fetch().
* Cara menggunakan Fetch API untuk mengirim data ke server (POST request).
* Perbedaan antara Fetch API dan XMLHttpRequest dalam hal fungsionalitas dan dukungan browser.
* Bagaimana cara menggunakan Fetch API dalam pengembangan aplikasi web secara lebih kompleks, seperti dengan menggunakan framework atau library JavaScript.
* Contoh kasus penggunaan Fetch API yang lebih realistis, misalnya mengambil data dari API publik atau mengambil data dari server backend.