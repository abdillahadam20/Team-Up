// Latihan Comparison dan Conditional
// Pada dasarnya program yang kita buat itu berjalan dengan kondisi TRUE, yang dimana jika kondisi dari sebuan statement FALSE program tersebut tidak akan berjalan. pelajari latihan dibawah

// deklarasi variable a dan b
let a = 3;
let b = 3;

// mencari tau apakah a lebih besar dari pada b [a > b] ?
console.log(a > b); // bernilai false karna a itu tidak lebih besar dari b

// mencoba menjalankan conditional statemen dengan kondisi diatas
if(a > b) {
  console.log("1. aku berjalan"); // program ini tidak akan berjalan karna a > b itu bernilai false atau tidak benar
}

// mencari tau apakah a lebih besar atau sama dengan b [a >= b] ?
console.log (a >= b); // bernilai true walaupun a tidak lebih dari b namun a itu bernilai sama dengan b yaitu sama - sama 3

if (a >= b){
  console.log("2. aku berjalan karna a >= b");
}

// deklarasi variable string
let c = "aku";
let d = "Aku";
let e = "Saya";
let f = "Aku";

// mencari tau apakah variable pertama itu sama dengan variable kedua?
console.log(c == d); // aku tidak sama dengan Aku [huruf a variable pertama kecil dan yang kedua besar]
console.log(c == e); // aku tidak sama dengan Saya
console.log(c == f); // aku tidak sama dengan Aku [huruf a variable pertama kecil dan yang kedua besar]
console.log(d == f); // Aku sama dengan Aku [kedua huruf A sama sama kapital, dan katanya sama Aku dan Aku]

// mencoba menjalankan conditional statemen dengan kondisi apakah c sama dengan f ?
if(c == f){
  console.log("3. aku tidak akan berjalan karena bernilai false");
}

// mencoba menjalankan conditional statemen dengan kondisi apakah d sama dengan f ?
if(d == f){
  console.log("4. aku akan berjalan karena bernilai true");
}

// mencoba menjalankan conditional statement dengan kondisi apakah c tidak sama dengan f?
if(c != f){
  console.log("5. aku akan berjalan karena bernilai true, dimana c itu tidak sama dengan f");
}

// deklarasi variable g
let g = "kucing goreng";

console.log(g == "kucing garong"); //g itu kucing goreng bukan kucing garong jadi jawabannya false
console.log(g == "kucin goreng"); //g itu kucing goreng bukan kucin ngoreng, disini kurang satu huruf yang harusnya kucing jadi kucin  jadi jawabannya false
console.log(g == "kucing goreng"); //g itu benar kucin goreng hasilnya true

// mencoba membuat conditional statement dengan if dan else if
if(g == "kucing garong"){
  console.log("6. apakah aku berjalan?");
}else if(g == "kucin goreng"){
  console.log("7. mungkin aku berjalan . .");
}else if(g == "kucing goreng"){
  console.log("8. jika aku benar maka aku akan berjalan");
}

// deklarasi variable h
let h = "kucing oren";

// mencoba membuat conditional statement dengan if , else if dan else
if(h == "kucing garong"){
  console.log("9. apakah aku berjalan?");
}else if(h == "kucin goreng"){
  console.log("10. mungkin aku berjalan . .");
}else if(h == "kucing goreng"){
  console.log("11. jika aku benar maka aku akan berjalan");
}else {
  console.log("12. jika semua kondisi diatas tidak ada yang benar, maka aku akan berjalan");
}
