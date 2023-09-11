# Tugas Assignment03_Week10

***
## Nama : Andi Mira Detavia
## NIM : 10221023
***

1.    Pengelolaan hubungan pelanggan adalah proses mengelola interaksi antara perusahaan dan pelanggan untuk memaksimalkan nilai pelanggan, meningkatkan loyalitas, dan meningkatkan pendapatan. Teknologi, termasuk JavaScript, dapat digunakan untuk membangun aplikasi pengelolaan hubungan pelanggan yang kuat. Fungsi penting aplikasi tersebut meliputi membangun database pelanggan, menganalisis data pelanggan, mengelola komunikasi, meningkatkan pengalaman pelanggan, dan mengintegrasikan sistem perusahaan. Berikut adalah beberapa fungsi penting dari aplikasi pengelolaan hubungan pelanggan yang dapat dibangun dengan menggunakan JavaScript:

* Membangun database pelanggan
    Database pelanggan penting dalam pengelolaan hubungan pelanggan. Dalam database tersebut, data pelanggan seperti nama, alamat, nomor telepon, email, jenis kelamin, dan lainnya disimpan. JavaScript dapat digunakan untuk membangun interface pengguna yang intuitif dalam menginput, mengedit, dan menghapus data pelanggan. JavaScript juga dapat digunakan untuk mengelola struktur database yang menyimpan data pelanggan.

* Analisis data pelanggan
    Data pelanggan yang tersimpan dalam database dapat dianalisis untuk mengidentifikasi tren dan pola perilaku pelanggan. Analisis data pelanggan dapat membantu perusahaan untuk memahami kebutuhan pelanggan dan merespon dengan strategi yang tepat. Dalam hal ini, JavaScript dapat digunakan untuk membangun algoritma analisis data pelanggan yang efektif. Algoritma ini dapat digunakan untuk mengelompokkan pelanggan berdasarkan perilaku mereka, mengidentifikasi pelanggan yang paling loyal, dan membuat rekomendasi produk yang tepat untuk pelanggan.

* Mengelola komunikasi dengan pelanggan
    Komunikasi yang efektif dengan pelanggan adalah kunci dalam pengelolaan hubungan pelanggan. Dalam hal ini, JavaScript dapat digunakan untuk membangun alat komunikasi yang efektif seperti email, pesan teks, chatbot, atau media sosial. JavaScript juga dapat digunakan untuk membangun sistem pemberitahuan yang otomatis untuk mengingatkan pelanggan tentang penawaran atau promo yang sedang berlangsung.

* Meningkatkan pengalaman pelanggan
    Pengalaman pelanggan adalah faktor yang sangat penting dalam pengelolaan hubungan pelanggan. Pengalaman pelanggan yang positif dapat meningkatkan loyalitas pelanggan dan meningkatkan keuntungan perusahaan. Dalam hal ini, JavaScript dapat digunakan untuk membangun interface pengguna yang intuitif dan responsif, yang memudahkan pelanggan dalam melakukan pembelian atau mengakses layanan perusahaan. JavaScript juga dapat digunakan untuk membangun sistem umpan balik pelanggan yang otomatis, yang memungkinkan perusahaan untuk mendapatkan masukan dari pelanggan dan merespons secara tepat waktu.

* Mengintegrasikan sistem perusahaan
    Pengelolaan hubungan pelanggan harus terintegrasi dengan sistem lain di perusahaan seperti sistem penjualan, sistem akuntansi, dan sistem pemasaran. Dalam hal ini, JavaScript dapat digunakan untuk membangun integrasi yang efektif antara sistem-sistem ini.

Contoh penggunaan dari permasalahan pengelolaan hubungan pelanggan adalah pada industri e-commerce.

E-commerce merupakan bisnis yang sangat bergantung pada hubungan pelanggan. Sebagai platform yang menjual produk dan layanan secara online, e-commerce harus berfokus pada membangun hubungan yang baik dengan pelanggan agar mereka kembali membeli produk di masa depan dan merekomendasikan bisnis tersebut kepada orang lain.Dalam e-commerce, terdapat beberapa cara untuk menggunakan fungsi JavaScript untuk mengelola hubungan pelanggan, di antaranya:

1. Mengirim email promosi: Dalam bisnis e-commerce, promosi dan penjualan adalah strategi pemasaran yang sangat        penting. Fungsi JavaScript dapat digunakan untuk mengirim email promosi ke pelanggan yang sudah melakukan pembelian sebelumnya. Email promosi tersebut bisa berisi diskon khusus atau tawaran produk baru yang sesuai dengan minat pelanggan berdasarkan riwayat pembelian mereka.

2. Personalisasi pengalaman pengguna: Fungsi JavaScript dapat digunakan untuk mengubah pengalaman pengguna di situs web e-commerce agar lebih personal. Dalam hal ini, penggunaan data pelanggan, seperti riwayat pembelian, dapat digunakan untuk menyesuaikan rekomendasi produk yang ditampilkan kepada pelanggan saat mereka mengunjungi situs web.

3. Membuat program loyalty: Program loyalty adalah strategi pemasaran populer yang digunakan oleh banyak bisnis e-commerce untuk membangun hubungan yang kuat dengan pelanggan mereka. Fungsi JavaScript dapat digunakan untuk membuat program loyalty di situs web e-commerce dengan menyediakan bonus poin atau diskon khusus untuk pelanggan yang sering membeli produk dari situs tersebut.

4. Analisis data pelanggan: Data pelanggan yang dikumpulkan oleh bisnis e-commerce dapat diolah dan dianalisis dengan menggunakan fungsi JavaScript. Analisis ini bisa memberikan wawasan tentang kebiasaan dan minat pelanggan, sehingga bisnis dapat membuat strategi pemasaran yang lebih efektif.

Dalam keseluruhan, penggunaan fungsi JavaScript dalam pengelolaan hubungan pelanggan pada industri e-commerce dapat membantu bisnis meningkatkan loyalitas pelanggan dan meningkatkan penjualan. Dengan memanfaatkan data pelanggan dan personalisasi pengalaman pengguna, e-commerce dapat menciptakan hubungan yang lebih dekat dan memuaskan dengan pelanggan.

2. 
```js
function deckOrder(shuffle){
    const symbol = ['♠', '♡', '♢', '♣']
    const number = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'] 
    const deckOrder = []
    for (let a = 0; a < symbol.length; a++){
      for (let i = 0; i < number.length; i++){
        const card = number[i] + symbol[a]
        if (shuffle.includes(card)) {
          deckOrder.push(card)
        }
      }
    }
    return deckOrder
  }
  
  const shuffle = ['6♠', 'Q♡', 'A♣', '7♡', 'K♢', '10♣', '8♢', '5♡', 'K♠', '3♣', '9♣', 'J♢', '7♢', '2♣', 'J♠', '9♠', '5♣', '8♠', '2♢', 'Q♢', '4♠', '10♢', 'A♠', 'J♣', '4♢', '6♢', '3♢', 'K♡', '9♡', '6♣', '8♣', '7♣', 'A♢', '2♡', '4♣', 'Q♠', '10♡', '3♠', '5♠']
  console.log(deckOrder(shuffle))
  ```
  hasil : <img src= "A.png">
  