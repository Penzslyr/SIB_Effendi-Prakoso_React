  
  Effendi Prakoso/
  React and React Native/
  RCTN-KS05-016/
  
  Tugas : 
    Membuat online simple calculator 
   
  Expected Result of Interface:
  
![image](https://user-images.githubusercontent.com/90124411/186601559-094adf1e-00ab-4fda-9ab3-c3f18343f362.png)

    
  
  Tampilan Akhir:
  
   ![image](https://user-images.githubusercontent.com/90124411/186635586-ca64112b-332f-47a7-b284-56471219ab06.png)

Flow calculator apps: 
  1. User input value 
  2. User input operator
  3. User input value jika ingin menggunakan operator berkali kali, atau input operator '=' jika ingin memunculkan hasilnya
  4. Calculator akan menampilkan 2 hasil operasi terakhir
  
 User Experience :
  1. Menambahkan efek hover pada setiap button
  2. Menambahkan efek brightness (btn menjadi agak terang dan gelap (untuk btn = karena warna yellow) 
  3. Menambahkan custom scroll bar jika hasil pada display melebihi layar
  4. Menambahkan efek saat button ditekan 

All Clear (AC) & Clear Entry (CE) Button:
  1. All clear akan mereset semua inputan termasuk hasilnya
  2. Clear Entry akan hanya akan mereset inputannya saja

Error handling: 
  1. Decimal tidak bisa diinput berkali kali (ex: 0.. , 1.2.3)
  2. Menghilangkan angka 0 jika angka tersebut tidak berupa decimal (Ex = 03 menjadi 3)
  3. Menambahkan scroll bar jika hasil melebihi layar (custom scroll bar)
  4. Menggunakan 2 operasi lebih tanpa klik '=' bisa memunculkan hasilnya dan calculator tetap berjalan 
  5. angka 0. (nol koma) tidak bisa dioperasikan
  6. error handling jika tidak ada desimal maka tambahkan, jika ada maka tidak bisa
  7. fix bug operator dpt di klik  berkali kali dan menghasilkan NaN (number dioperasikan dengan simbol operasi)
  8. Angka dibagi 0 akan menghasilkan 'Infinity'

