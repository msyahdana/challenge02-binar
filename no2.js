const checkTypeNumber = (givenNumber) => {
  // validasi terhadap tipe data parameter
  // Mengecek jika givenNumber tidak diberikan masukan/tidak di definisikan alias (undefined) maka akan mengembalikan string "Error: Bro where is the parameter?"
  // Mengecek jika tipe data givenNumber tidak sama dengan number maka akan mengembalikan string "Error: Invalid data type!"
  if (givenNumber === undefined) {
    return "Error: Bro where is the parameter?"; //
  } else if (typeof givenNumber !== "number") {
    return "Error: Invalid data type!";
  }

  // Menentukan givernNumber Genap/Ganjil
  // Jika givenNymber di modulus 2 sama dengan 0 maka akan mengembalikan string "GENAP", jika tidak/false mengembalikan string "GANJIL"
  return givenNumber % 2 == 0 ? "GENAP" : "GANJIL";
};

//Export function checkTypeNumber
module.exports = checkTypeNumber;

console.log(checkTypeNumber(10)); //Output => "GENAP"
console.log(checkTypeNumber(3)); //Output => "GANJIL"
console.log(checkTypeNumber("3")); //Output => "Error: Invalid data type!"
console.log(checkTypeNumber({})); //Output => "Error: Invalid data type!"
console.log(checkTypeNumber([])); //Output => "Error: Invalid data type!"
console.log(checkTypeNumber()); //Output =>"Error: Bro where is the parameter?"
