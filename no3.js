//Import checkTypeNumber yang berada di file no2
const checkTypeNumber = require("./no2");

function checkEmail(email) {
  // validasi terhadap tipe data parameter
  // Mengecek jika email tidak diberikan masukan/tidak di definisikan alias (undefined) maka akan mengembalikan string "Error: Bro where is the parameter?"
  // Mengecek jika tipe data email tidak sama dengan string maka akan mengembalikan string "Error: Invalid data type!"
  // Jika tidak keduanya makan akan mengecek email valid/invalid
  if (email === undefined) {
    return "Error: Bro where is the parameter?";
  } else if (typeof email !== "string") {
    return "Error: Invalid data type";
  } else {
    // regular expression untuk mengecek format email
    const regExEmail = /[a-z0-9.]+@[a-z.]+\.[a-z]{2,}/;

    // cek apakah email sesuai dengan format regExEmail, jika sesuai maka akan mengembalikan "VALID", jika tidak mengembalikan "INVALID"
    if (regExEmail.test(email)) {
      return "VALID";
    } else {
      return "INVALID";
    }
  }
}

console.log(checkEmail("apranata12@binar.co.id")); // Output => "VALID"
console.log(checkEmail("apranata@binar.com")); // Output => "VALID"
console.log(checkEmail("apranata@binar")); // Output => "INVALID"
console.log(checkEmail("apranata")); // Output => "INVALID"

console.log(checkTypeNumber(checkEmail(3322))); // Output => "Error: Invalid data type!" yang berada di dalam funtion checkNumberType/no.2
console.log(checkEmail()); // Output => "Error: Bro where is the parameter?"
