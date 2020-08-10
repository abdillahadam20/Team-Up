// Latihan template literal, cara melakukan output string dan variable menggunakan backthick (` `)

let sapa = "Halo Team Up,"; // Variable sapa dengan tipe data string
let nama = "Adam"; // variable nama dengan tipe data string
let umur = 25; // variable umur dengan tipe data integer

// Pemanggilan Biasa
let cara1Biasa = sapa + " namaku " + nama + ", umurku " + umur + " tahun. Mohon bantuannya";
console.log(cara1Biasa);

// Pemanggilan Biasa langsung
console.log(sapa + " namaku " + nama + ", umurku " + umur + " tahun. Mohon bantuannya");

// Pemanggilan ES6
let caraES6 = `${sapa} namaku ${nama}, umurku ${umur} tahun. Mohon bantuannya`;
console.log(caraES6);

// Pemanggilan ES6 Langsung
console.log(`${sapa} namaku ${nama}, umurku ${umur} tahun. Mohon bantuannya`);

// Numeric Prosessing
let angka1 = 10;
let angka2 = 5;
let hasil = angka1 + angka2;

// Output dari penambahan antara angka1 dan angka2
console.log(hasil);

// Output dari penambahan antara angka1 dan angka2 langsung tanpa variable "hasil"
console.log(angka1 + angka2);

// Output dari penambahan antara angka1 dan angka2 langsung tanpa variable "hasil" menggunakan ES6 bracket
console.log(`${angka1 + angka2}`);

// Output dari penambahan dengan menggunakan string
console.log(angka1 + " + " + angka2 + " = " + (angka1 + angka2));

// Output dari penambahan menggunakan string dengan format ES6
console.log(`${angka1} + ${angka2} = ${angka1 + angka2}`); // Operator tambah (+) dan simbol sama dengan/equal (=) diluar brackets ==> { } <== adalah string

// Bagian Latihan
let tanggal = "Minggu 9 Agustus 2020 pukul 19:12 WIB"; //Hari, Tanggal Bulan Tahun Jam Menit Submit
let hobi = "Programming"; // Hobi yang diminati
let tugas1 = "Semangat semua, " + sapa + " Sekarang Hari " + tanggal + ", semoga masih semangat." + " Namaku " + nama + " umurku " + umur + " tahun," + " Hobiku adalah " + hobi + " Mohon bantuannya semua!";

// Tugas1
// 1. Tampilkan kalimat diatas pada tampilan console.log
console.log(tugas1);
// 2. Ubah kedalam format ES6
tugas1ES6 = (`Semangat semua, ${sapa} Sekarang Hari ${tanggal}, semoga masih semangat. Namaku ${nama} umurku ${umur} tahun, hobiku adalah ${hobi}. Mohon bantuannya semua!`);
// 3. Outputkan Text diatas dengan format ES6
console.log(tugas1ES6);

// Tugas2
// 1. Buat 6 variable bernama "operand1", "operand2", "operand3", "operator1", "operator2", "equal"
let operand1 = 10;
let operand2 = 5;
let operand3 = 15;
let operator1 = 'x';
let operator2 = '-';
let equal = '=';
// 2. Untuk operator1 gunakan kali(x), untuk operator2 gunakan (-), sedangkan untuk equal bernilai sama dengan (=)
let hasilBaru = operand1 * operand3 - operand2;
let result = `${operand1} ${operator1} ${operand3} ${operator2} ${operand2} ${equal} ${hasilBaru}`
// 3. Outputkan ke 6 variable diatas dengan format operand1 * operand3 - operand2 = hasilnya tanpa menambahkan "STRING" didalamnya
console.log(result);

