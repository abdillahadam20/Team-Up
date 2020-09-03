/* Rancanglah sebuah JavaScript dengan ketentuan seperti dibawah :
1. memiliki 5 variables :
    * nama lengkap  contoh : Kechap Tamazola
    * berat dalam (kg) contoh : 300
    * tinggi dalma (cm) contoh : 500
    * tanggal lahir contoh : (31 Desember 1980)
    * banyak minum dalam satu hari (ml) contoh : 500
2. kemudian gunakan conditional formating yang menentukan apakah Body Mass Index kita baik
gunakan referensi dibawah ini :
    * Rumus https://4.bp.blogspot.com/-nBF9Z1tFGhI/W3MqbdD0j7I/AAAAAAAAAIs/UdyXTIxsBT8Pl8usABxEK_Fusj5S0SnBQCLcBGAs/s1600/HOW%2BTO%2BCALCULATE%2BBODY%2BMASS%2BINDEX%2BBMI.jpg
    * Standart https://pbs.twimg.com/media/EICh-loW4AIACJp.jpg
variable yang digunakan : bmi, kondisibmi
kemudian outputkan seperti dibawah menggunakan template literal:
Halo, nama saya Kechap Tamazola berat saya 300kg, tinggi saya 500cm. Saya lahir pada tanggal 31 Desember 1980, saat ini nilai BMI saya 25, dan saya sedikit overweight. Saya meminum air putih sebanyak 500ml perhari, dan kelihatannya saya [inline conditional - jika : >=1500 text = sudah cukup , jika kurang dari 1500, text = masih kurang minum air putih dan saya harus meminum sebanyak (1500 - air yang diminum)ml lagi)]
**** 
Halo, nama saya Kechap Tamazola berat saya 300kg, tinggi saya 500cm. Saya lahir pada tanggal 31 Desember 1980, saat ini nilai BMI saya 25, dan saya sedikit overweight. Saya meminum air putih sebanyak 500ml perhari, dan kelihatannya saya masih kurang minum air putih dan saya harus meminum sebanyak 1000ml lagi
****
    
** normal conditional **
if(x == 2) {
    result = z+2
}else {
    result = z-2
}
**
    
** inline conditional **
x == 2 ? z + 2 : z - 2
**
*/

/*** YOUR APP BELOW HERE ***/
let fullName = "Adam Abdillah";
let beratKg = 60;
let tinggiBadan = 169;
let born = "20 Juni 1995";
let drinkOneDay = 1000;

let BMI = beratKg / (tinggiBadan/100)**2;

function kondisiIdeal() {
    if(BMI < 18.5) {
        console.log('Below Normal Weight');
    } else if(BMI < 25 ) {
        console.log('Normal Weight');
    } else if(BMI < 30) {
        console.log('Overweight');
    } else if(BMI < 35) {
        console.log('Obesity I');
    }  else if(BMI < 40) {
        console.log('Obesity II');
    } else if(BMI < 40) {
        console.log('Obesity III');
    } else {
        console.log('Check to your doctor');
    }
}

kondisiIdeal();

console.log(
    `Halo, nama saya ${fullName} berat saya adalah ${beratKg}kg, tinggi saya ${tinggiBadan}cm. Saya lahir pada tanggal
    ${born}, saat ini nilai BMI saya adalah ${BMI}, dan saya sedikit overweight. Saya meminum air putih sebanyak ${drinkOneDay},
     dan kelihatannya saya ${drinkOneDay - 1500} masih kurang minum air putih dan saya harus meminum sebanyak ${1500 - drinkOneDay}ml lagi)` 
)
