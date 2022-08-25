Effendi Prakoso / React and React Native / RCTN-KS05-016

 Object adalah mirip seperti array namun dapat menyimpan atau menampung tipe data berbeda. Object dapat menampung data menggunakan key atau property dan tipe datanya bisa bebas. array dan object bisa dikombinasikan dan biasanya disebut dengan Array of Object. 

   Destructuring Object merupakan fitur baru dari Javascript ES6. Untuk mengekstraksi data, kita bisa menggunakan berbagai cara. salah satunya menggunakan object literal notation saat mendefinisikan object. Tetapi setelah fitur ini muncul, paling efisien meng ekstraksi data menggunakan fitur ini karena kode yang dibuat lebih sedikit. Kita juga bisa melakukan destructuring dari hasil return sebuah fungsi (Destructuring Function Result), ktia juga bisa men destructuring sebuah Array. selain itu fitur ini juga bisa memberi nama lain untuk properti yang kita ekstrak (Aliasing Object Properties) 
    
   'this' pada javascript merupakan variabel global, dan this juga digunakan untuk mendeklarasikan public properties.
    
   Keuntungan arrow function dan Bind(this)
   1. Sintaks lebih pendek 
   2. Implicit return (tidak perlu menuliskan keyword return)
   3. Memudahkan dalam memahami 'this' keyword sehingga penggunaannya mudah

    
   javascript juga mempunyai fungsional programming salah satu nya adalah konsep Higher-Order Function. di javascript fungsi dianggap setara dengan tipe data lain (First-class order) sehingga kita dapat mengirimkan fungsi di parameter fungsi lainnya. contohnya adalah pengunaan setInterval yang menerima dua parameter (callback, interval). 
   
   JS juga mempunyai fungsi bawaan pada array yaitu Filter, Map, dan reduce. Filter digunakan untuk menfilterasi array yang ada. filter menerima sebuah parameter berbentuk fungsi dan akan me return array baru dari hasil kalkulasi filtering array yang lama. filter hanya menerima satu parameter saja untuk melakukan filtering. sedangkan Map tidak membuang elemen array seperti yang filtering lakukan, Map akan mereturn jumlah yang sama dari array asalnya. Sedangkan reduce digunakan untuk melakukan keduanya (Map dan filter), bedanya Map dan filter lebih spesifik sedangkan reduce lebih umum atau generik. (contoh mencari sum dari isi dari nilai array). 





